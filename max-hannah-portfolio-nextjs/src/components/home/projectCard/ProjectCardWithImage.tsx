import Image from 'next/image';
import { Asset } from 'contentful';
import { urlProtocol } from '@/src/urls';
import { Project } from '@/src/types/ContentfulTypes';
import { PortfolioButton } from '@/src/components/home/portfolioButton/PortfolioButton';
import React from 'react';

type Props = {
    project: Project;
    thumbnailAsset: Asset;
    imageLayout: 'left' | 'right';
};
export const ProjectCardWithImage = ({
    project,
    thumbnailAsset,
    imageLayout,
}: Props) => {
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
                src={urlProtocol + thumbnailAsset.fields.file.url}
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
            <PortfolioButton buttonText={'see more'} url={project.slug} />
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
