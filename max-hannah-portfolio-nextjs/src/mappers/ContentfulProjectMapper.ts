import {ApiAsset, ContentfulEntries, ContentfulSectionEntry} from "../types/ContentfulTypes";
import {PortfolioProject, PortfolioProjects} from "../types/PortfolioProject";
import {PortfolioAsset} from "../types/PortfolioTypes";
import {portfolioSectionFromContentfulSection} from "./ContentfulSectionMapper";

export const ContentfulEntryCollectionToPortfolioProjects = (
    entryCollection: ContentfulEntries
): PortfolioProjects => {
    const asset = (id: string) => {
        return portfolioAssetFromContentfulAsset(entryCollection.includes.Asset, id);
    };

    const projects = entryCollection.items.map((item) => {
        const portfolio: PortfolioProject = {
            slug: item.fields.slug,
            title: item.fields.title,
            description: item.fields.description,
            thumbnail: asset(item.fields.thumbnail.sys.id),
            featuredImage: asset(item.fields.featuredImage.sys.id),
            sections: item.fields.sections?.map((section) =>
                portfolioSectionFromContentfulSection(
                    entryCollection.includes,
                    section
                )
            ),
        };
        return portfolio;
    });

    return {
        projects: projects,
    };
};

const portfolioAssetFromContentfulAsset = (
    assets: ReadonlyArray<ApiAsset>,
    assetId: string
): PortfolioAsset => {
    const asset = getAssetItemById(assets, assetId);
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

export const getEntryItemById = (
    entry: Array<ContentfulSectionEntry>,
    id: string
): ContentfulSectionEntry => {
    const item = entry.find((i) => i.sys.id == id);

    if (item == undefined) {
        throw new Error(`Item with id '${id}' not found in includes`);
    }
    return item;
};

export const getAssetItemById = (
    asset: ReadonlyArray<ApiAsset>,
    id: string
): ApiAsset => {
    const item = asset.find((i) => i.sys.id == id);

    if (item == undefined) {
        throw new Error(`Item with id '${id}' not found in Assets`);
    }
    return item;
};
