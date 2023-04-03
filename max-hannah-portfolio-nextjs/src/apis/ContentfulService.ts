import { fetchEntriesFromContentful } from "@/src/apis/ContentfulApi";
import {
  ContentfulHomePageEntryCollection,
  ContentfulSection,
  Project,
  SingleContentfulEntry,
} from "@/src/types/ContentfulTypes";
import { Asset, Entry, EntryCollection } from "contentful";

export async function GetContentfulDataForHomePageFromApi(): Promise<ContentfulHomePageEntryCollection> {
  const fieldsToFetch = `sys.id,fields.title,fields.slug,fields.description,fields.thumbnail`;
  const params = {
    limit: "10",
    select: fieldsToFetch,
    content_type: "project",
  };

  const data = await fetchEntriesFromContentful(params);

  if (data.items.length == 0) {
    throw new Error("No projects returned");
  }

  if (data.includes.Asset.length == 0) {
    throw new Error("No assets returned");
  }

  return data as ContentfulHomePageEntryCollection;
}

export async function GetContentfulProject(
  slug: string
): Promise<EntryCollection<Project>> {
  const params = {
    "fields.slug": slug,
    content_type: "project",
  };
  return await fetchEntriesFromContentful(params);
}

export function getAssetByAssetId(
  assets: Array<Asset>,
  assetId: string
): Asset {
  const asset = assets.find((a) => a.sys.id == assetId);

  if (asset == undefined) {
    throw new Error("Asset not found in collection");
  }
  return asset;
}

export function extractSectionsEntries(
  project: SingleContentfulEntry
): Array<Entry<ContentfulSection>> {
  const sections = project.item.fields.sections?.map((section) => {
    let entry = project.includes.Entry.find(
      (entry) => entry.sys.id == section.sys.id
    );
    if (entry == undefined) {
      throw new Error(
        `Cannot find entry id ${section.sys.id} in Entry array for project id ${project.item.sys.id}`
      );
    }
    return entry;
  });

  if (sections?.length) {
    return sections;
  }

  throw new Error(
    `No matching entries returned for project id ${project.item.sys.id}`
  );
}
