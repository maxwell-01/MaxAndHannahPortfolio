import {
  ApiAsset,
  ContentfulEntries,
  ContentfulSectionEntry,
} from '../types/ContentfulTypes';
import { PortfolioProject, PortfolioProjects } from '../types/PortfolioProject';
import { PortfolioAsset } from '../types/PortfolioTypes';
import { portfolioSectionFromContentfulSection } from './ContentfulSectionMapper';
import { fetchEntryFromContentful } from '../apis/ContentfulApi';

export const ContentfulEntryCollectionToPortfolioProjects = async (
  entryCollection: ContentfulEntries
): Promise<PortfolioProjects> => {
  const asset = (id: string) => {
    return portfolioAssetFromContentfulAsset(
      entryCollection.includes.Asset,
      id
    );
  };

  const projects = await Promise.all(
    entryCollection.items.map(async (item) => {
      const portfolio: PortfolioProject = {
        metadata: {
          id: item.sys.id,
          createdAt: item.sys.createdAt,
          updatedAt: item.sys.updatedAt,
          contentType: 'project',
        },
        slug: item.fields.slug,
        title: item.fields.title,
        description: item.fields.description,
        thumbnail: asset(item.fields.thumbnail.sys.id),
        featuredImage: asset(item.fields.featuredImage.sys.id),
        sections: await Promise.all(
          item.fields.sections?.map(
            async (section) =>
              await portfolioSectionFromContentfulSection(
                entryCollection.includes,
                section
              )
          ) ?? []
        ),
      };
      return portfolio;
    })
  );

  return {
    projects: projects,
    errors: entryCollection.errors,
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
      contentType: 'asset',
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

export const getEntryItemById = async (
  entry: Array<ContentfulSectionEntry>,
  id: string
): Promise<ContentfulSectionEntry> => {
  let item = entry.find((i) => i.sys.id == id);

  if (item == undefined) {
    item = await fetchEntryFromContentful(id);
    if (item == undefined) {
      throw new Error(`Item with id '${id}' does not exist`);
    }
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
