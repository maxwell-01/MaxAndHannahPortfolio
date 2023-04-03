import styles from "./home.module.scss";
import { ProjectCardLeftImage } from "@/src/components/home/projectCard/ProjectCardLeftImage";
import { ProjectCardRightImage } from "@/src/components/home/projectCard/ProjectCardRightImage";
import { ArchiveStrip } from "@/src/components/home/archiveStrip/ArchiveStrip";
import { GetProjectDataForHomepage } from "@/src/apis/apis";
import { Asset } from "contentful";
import { getAssetByAssetId } from "@/src/apis/ContentfulService";

export const Home = async () => {
  const projects = await GetProjectDataForHomepage();
  const assets: Array<Asset> = projects.includes.Asset;

  const projectsForMainSection = projects.items.slice(0, 4);
  const projectsForArchiveSection =
    projects.items.length > 4 ? projects.items.slice(4, 11) : undefined;

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.heading1}>Building software with</h1>
        <h1 className={styles.heading1}>impactful designs</h1>
      </header>
      <div className={styles.projectsSection}>
        <div className={styles.filterContainer}>
          <div className={styles.filterHeading}>Filter by:</div>
          <div className={styles.filterItem}>Hannah</div>
          <div className={styles.filterItem}>Max</div>
          <div className={styles.filterItem}>Combo</div>
        </div>
        <div className={styles.projectsSection}>
          {projectsForMainSection.map((project, index) =>
            index % 2 === 0 ? (
              <ProjectCardLeftImage
                project={project.fields}
                key={project.sys.id}
                thumbnailAsset={getAssetByAssetId(
                  assets,
                  project.fields.thumbnail.sys.id
                )}
              />
            ) : (
              <ProjectCardRightImage
                project={project.fields}
                key={project.sys.id}
                thumbnailAsset={getAssetByAssetId(
                  assets,
                  project.fields.thumbnail.sys.id
                )}
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
  );
};
