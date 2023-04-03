﻿import styles from "./projectCardLeftImage.module.scss";
import React from "react";
import { ProjectCardInfo } from "@/src/components/home/projectCard/ProjectCardInfo";
import Image from "next/image";
import { Asset } from "contentful";
import { urlProtocol } from "@/src/urls";
import { Project } from "@/src/types/ContentfulTypes";

type Props = {
  project: Project;
  thumbnailAsset: Asset;
};
export const ProjectCardLeftImage = ({ project, thumbnailAsset }: Props) => {
  return (
    <div className={styles.ProjectCardContainer}>
      <div>
        <Image
          src={urlProtocol + thumbnailAsset.fields.file.url}
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
