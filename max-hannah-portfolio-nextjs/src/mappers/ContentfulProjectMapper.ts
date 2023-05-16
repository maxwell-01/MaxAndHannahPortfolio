import { Project } from '@/src/types/ContentfulTypes';
import { Asset, EntryCollection } from 'contentful';
import {
    PortfolioProject,
    PortfolioProjects,
} from '@/src/types/PortfolioProject';
import { PortfolioAsset } from '@/src/types/PortfolioTypes';
import { getIncludesItemById } from '@/src/apis/ContentfulService';

export const ContentfulEntryCollectionToPortfolioProjects = (
    entryCollection: EntryCollection<Project>
): PortfolioProjects => {
    const asset = (id: string) => {
        return portfolioAssetFromContentfulAsset(entryCollection.includes, id);
    };

    const entry = (id: string) => {};

    const projects = entryCollection.items.map((item) => {
        const portfolio: PortfolioProject = {
            slug: '',
            title: '',
            description: item.fields.description,
            thumbnail: asset(item.fields.thumbnail.sys.id),
            featuredImage: asset(item.fields.featuredImage.sys.id),
            sections: item.fields.sections?.map((section) =>
                portfolioSectionFromContentfulSection(
                    section,
                    entryCollection.includes.Entry
                )
            ),
        };
        return portfolio;
    });

    const portfolioProjects: PortfolioProjects = {
        projects: projects,
    };
    return portfolioProjects;
};

const portfolioAssetFromContentfulAsset = (
    includes: ReadonlyArray<Asset>,
    assetId: string
): PortfolioAsset => {
    const asset = getIncludesItemById(includes, assetId);
    return {
        metadata: {
            id: assetId,
            createdAt: asset.sys.createdAt,
            updatedAt: asset.sys.updatedAt,
        },
        fields: {
            title: asset.fields.title,
            description: asset.fields.description,
            url: asset.fields.file.url,
            details: asset.fields.file.details,
            fileName: asset.fields.file.fileName,
            contentType: asset.fields.file.contentType,
        },
    };
};
