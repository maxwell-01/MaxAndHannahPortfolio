import { NavMenu } from '@/src/components/navMenu/NavMenu';
import { Footer } from '@/src/components/footer/Footer';
import { GetProjectDataForHomepage } from '@/src/apis/apis';
import { Asset } from 'contentful';
import { ProjectCardWithImage } from '@/src/components/home/projectCard/ProjectCardWithImage';
import { GetEntryFromIncludesByItem } from '@/src/apis/ContentfulService';
import { ArchiveStrip } from '@/src/components/home/archiveStrip/ArchiveStrip';

export default async function App() {
    const projects = await GetProjectDataForHomepage();
    const assets: Array<Asset> = projects.includes.Asset;

    const projectsForMainSection = projects.items.slice(0, 4);
    const projectsForArchiveSection =
        projects.items.length > 4 ? projects.items.slice(4, 11) : undefined;

    const headerClass = 'py-40 px-28 flex flex-col justify-center w-full';
    const h1Class = 'block text-h1 font-bold font-heading leading-heading1';
    const bodyClass = 'flex flex-col gap-16 px-28 text-h3';
    const filterContainer = 'flex gap-20 justify-center';
    const filterHeading = 'uppercase text-h3 font-heading font-bold';
    const filterItem =
        'uppercase text-h3 font-heading font-bold cursor-pointer hover:text-gray-400';
    const projectsSection = 'flex flex-col gap-9';

    return (
        <main className={'max-w-screen-2xl mx-auto flex flex-col'}>
            <NavMenu />
            <>
                <header className={headerClass}>
                    <h1 className={h1Class}>Building software with</h1>
                    <h1 className={h1Class}>impactful designs</h1>
                </header>
                <div className={bodyClass}>
                    <div className={filterContainer}>
                        <div className={filterHeading}>Filter by:</div>
                        <div className={filterItem}>Hannah</div>
                        <div className={filterItem}>Max</div>
                        <div className={filterItem}>Combo</div>
                    </div>
                    <div className={projectsSection}>
                        {projectsForMainSection.map((project, index) =>
                            index % 2 === 0 ? (
                                <ProjectCardWithImage
                                    project={project.fields}
                                    key={project.sys.id}
                                    thumbnailAsset={GetEntryFromIncludesByItem(
                                        assets,
                                        project.fields.thumbnail.sys.id
                                    )}
                                    imageLayout={'left'}
                                />
                            ) : (
                                <ProjectCardWithImage
                                    project={project.fields}
                                    key={project.sys.id}
                                    thumbnailAsset={GetEntryFromIncludesByItem(
                                        assets,
                                        project.fields.thumbnail.sys.id
                                    )}
                                    imageLayout={'right'}
                                />
                            )
                        )}
                    </div>
                    {projectsForArchiveSection && (
                        <ArchiveStrip
                            archiveProjects={projectsForArchiveSection}
                            assets={assets}
                        />
                    )}
                </div>
            </>
            <Footer />
        </main>
    );
}
