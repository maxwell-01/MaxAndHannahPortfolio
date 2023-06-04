import Image from 'next/image';
import React from 'react';
import { urlProtocol } from '../../../urls';
import { PortfolioButton } from '../portfolioButton/PortfolioButton';
import { PortfolioProject } from '../../../types/PortfolioProject';
import { pathify } from 'next/dist/server/lib/squoosh/emscripten-utils';
import { combinePaths } from '../../../helpers/CombinePaths';

type Props = {
  project: PortfolioProject;
  imageLayout: 'left' | 'right';
};
export const ProjectCardWithImage = ({ project, imageLayout }: Props) => {
  const maxDescriptionLength = 200;
  const substringIndexStart = 0;

  const truncatedDescription =
    project.description.length > maxDescriptionLength
      ? project.description.substring(
          substringIndexStart,
          maxDescriptionLength
        ) + '...'
      : project.description;

  const ImageComponent = () => (
    <div className={'flex items-centre justify-center max-w-lg max-h-md'}>
      <Image
        className="object-contain"
        src={urlProtocol + project.thumbnail.fields.url}
        alt={'Cover image for ' + project.title}
        width={508}
        height={533}
      />
    </div>
  );

  const InfoComponent = () => (
    <div className={'pt-10 flex flex-col justify-around w-full h-full'}>
      <div className={'font-heading text-h2 uppercase font-bold'}>
        {project.title}
      </div>
      <div className={'pb-10 font-body text-base font-regular'}>
        {truncatedDescription}
      </div>
      <PortfolioButton
        buttonText={'see more'}
        url={combinePaths('projects', project.slug)}
      />
    </div>
  );

  return (
    <div className={'flex gap-20'}>
      {imageLayout == 'left' ? (
        <>
          <ImageComponent />
          <InfoComponent />
        </>
      ) : (
        <>
          <InfoComponent />
          <ImageComponent />
        </>
      )}
    </div>
  );
};
