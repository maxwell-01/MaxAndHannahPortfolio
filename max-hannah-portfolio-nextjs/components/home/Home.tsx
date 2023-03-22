import { ProjectsData } from "@/data/ProjectsData";
import styles from "./home.module.scss";
import { ProjectCardLeftImage } from "@/components/home/projectCard/ProjectCardLeftImage";
import { ProjectCardRightImage } from "@/components/home/projectCard/ProjectCardRightImage";
import { ArchiveStrip } from "@/components/home/archiveStrip/ArchiveStrip";

export const Home = async () => {
  const projectsInProjectSection = ProjectsData.projects.slice(0, 4);
  const projectsForArchiveSection = ProjectsData.projects.slice(5, 11);

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
          {projectsInProjectSection.map((project, index) =>
            index % 2 === 0 ? (
              <ProjectCardLeftImage project={project} key={project.id} />
            ) : (
              <ProjectCardRightImage project={project} key={project.id} />
            )
          )}
        </div>
        <ArchiveStrip archiveProjects={projectsForArchiveSection} />
      </div>
    </>
  );
};
