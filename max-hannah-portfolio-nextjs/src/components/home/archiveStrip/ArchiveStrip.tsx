import styles from "./ArchiveStrip.module.scss";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Asset, Entry } from "contentful";
import { getAssetByAssetId } from "@/src/apis/ContentfulService";
import { urlProtocol } from "@/src/urls";
import { Project } from "@/src/types/ContentfulTypes";

type Props = {
  archiveProjects: Array<Entry<Project>>;
  assets: Array<Asset>;
};
export const ArchiveStrip = ({ archiveProjects, assets }: Props) => {
  return (
    <div className={styles.archiveContainer}>
      <div className={styles.archiveHeader}>Archive</div>
      <div className={styles.archiveItem}>
        {archiveProjects.map((project) => (
          <Link href={"/projects/" + project.fields.slug} key={project.sys.id}>
            <Image
              src={
                urlProtocol +
                getAssetByAssetId(assets, project.fields.thumbnail.sys.id)
                  .fields.file.url
              }
              width={416}
              height={294}
              alt={"Thumbnail image for project " + project.fields.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
