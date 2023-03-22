import styles from "./ProjectCardRightImage.module.scss";
import { ProjectDto } from "@/data/ProjectsData";
import { ProjectCardInfo } from "@/components/home/projectCard/ProjectCardInfo";
import Image from "next/image";

type Props = {
  project: ProjectDto;
};
export const ProjectCardRightImage = ({ project }: Props) => {
  return (
    <div className={styles.ProjectCardContainer}>
      <div>
        <ProjectCardInfo
          title={project.title}
          description={project.description}
        />
      </div>
      <div>
        <Image
          src={project.thumbnail}
          width={508}
          height={533}
          alt={"Cover image for " + project.title}
        />
      </div>
    </div>
  );
};
