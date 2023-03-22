import { ProjectDto } from "@/data/ProjectsData";
import styles from "./projectCardLeftImage.module.scss";
import React from "react";
import { ProjectCardInfo } from "@/components/home/projectCard/ProjectCardInfo";
import Image from "next/image";

type Props = {
  project: ProjectDto;
};
export const ProjectCardLeftImage = ({ project }: Props) => {
  return (
    <div className={styles.ProjectCardContainer}>
      <div>
        <Image
          src={project.thumbnail}
          width={508}
          height={533}
          alt={"Cover image for " + project.title}
        />
      </div>
      <div>
        <ProjectCardInfo
          title={project.title}
          description={project.description}
        />
      </div>
    </div>
  );
};
