import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlProtocol } from '../../../urls';
import { PortfolioProject } from '../../../types/PortfolioProject';

type Props = {
  archiveProjects: Array<PortfolioProject>;
};
export const ArchiveStrip = ({ archiveProjects }: Props) => {
  return (
    <div className={'flex flex-col align-center'}>
      <div
        className={'w-full pb-3 pl-10 font-heading font-bold text-h2 uppercase'}
      >
        Archive
      </div>
      <div className={'flex flex-wrap justify-center gap-5 justify-between'}>
        {archiveProjects.map((project) => (
          <Link href={'/projects/' + project.slug} key={project.metadata.id}>
            <Image
              src={urlProtocol + project.thumbnail.fields.url}
              width={416}
              height={294}
              alt={'Thumbnail image for project ' + project.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
