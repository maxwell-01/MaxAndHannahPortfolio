﻿import { GetProjectDataForHomepage } from '../src/apis/apis';
import { NavMenu } from '../src/components/navMenu/NavMenu';
import { ProjectCardWithImage } from '../src/components/home/projectCard/ProjectCardWithImage';
import { ArchiveStrip } from '../src/components/home/archiveStrip/ArchiveStrip';
import { Footer } from '../src/components/footer/Footer';

export default async function App() {
  const projects = await GetProjectDataForHomepage(10);

  const projectsForMainSection = projects.projects.slice(0, 4);
  const projectsForArchiveSection =
    projects.projects.length > 4 ? projects.projects.slice(4, 11) : undefined;

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
                  project={project}
                  key={project.metadata.id}
                  imageLayout={'left'}
                />
              ) : (
                <ProjectCardWithImage
                  project={project}
                  key={project.metadata.id}
                  imageLayout={'right'}
                />
              )
            )}
          </div>
          {projectsForArchiveSection && (
            <ArchiveStrip archiveProjects={projectsForArchiveSection} />
          )}
        </div>
      </>
      <Footer />
    </main>
  );
}
