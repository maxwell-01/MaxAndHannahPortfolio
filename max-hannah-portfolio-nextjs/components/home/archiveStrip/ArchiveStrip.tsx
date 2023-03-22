import styles from "./ArchiveStrip.module.scss";
import { ProjectDto } from "@/data/ProjectsData";
import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  archiveProjects: Array<ProjectDto>;
};
export const ArchiveStrip = ({ archiveProjects }: Props) => {
  return (
    <div className={styles.archiveContainer}>
      <div className={styles.archiveHeader}>Archive</div>
      <div className={styles.archiveItem}>
        {archiveProjects.map((project, index) => (
          <Link href={"/projects/" + project.id} key={project.id}>
            <Image
              src={project.thumbnail}
              width={416}
              height={294}
              alt={"Project image for " + project.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
