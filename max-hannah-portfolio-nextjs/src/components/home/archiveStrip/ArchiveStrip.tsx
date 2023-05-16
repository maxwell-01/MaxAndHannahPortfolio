import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Asset, Entry } from 'contentful';
import { GetEntryFromIncludesByItem } from '@/src/apis/ContentfulService';
import { urlProtocol } from '@/src/urls';
import { Project } from '@/src/types/ContentfulTypes';

type Props = {
    archiveProjects: Array<Entry<Project>>;
    assets: Array<Asset>;
};
export const ArchiveStrip = ({ archiveProjects, assets }: Props) => {
    return (
        <div className={'flex flex-col align-center'}>
            <div
                className={
                    'w-full pb-3 pl-10 font-heading font-bold text-h2 uppercase'
                }
            >
                Archive
            </div>
            <div
                className={
                    'flex flex-wrap justify-center gap-5 justify-between'
                }
            >
                {archiveProjects.map((project) => (
                    <Link
                        href={'/projects/' + project.fields.slug}
                        key={project.sys.id}
                    >
                        <Image
                            src={
                                urlProtocol +
                                GetEntryFromIncludesByItem(
                                    assets,
                                    project.fields.thumbnail.sys.id
                                ).fields.file.url
                            }
                            width={416}
                            height={294}
                            alt={
                                'Thumbnail image for project ' +
                                project.fields.title
                            }
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};
