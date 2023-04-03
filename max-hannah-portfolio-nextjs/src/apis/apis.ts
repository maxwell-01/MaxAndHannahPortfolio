import {
  ContentfulHomePageEntryCollection,
  mapContentfulReponseToSingleContentfulEntry,
  SingleContentfulEntry,
} from "@/src/types/ContentfulTypes";
import {
  GetContentfulDataForHomePageFromApi,
  GetContentfulProject,
} from "@/src/apis/ContentfulService";

export async function GetProjectDataForHomepage(): Promise<ContentfulHomePageEntryCollection> {
  try {
    return await GetContentfulDataForHomePageFromApi();
  } catch (e) {
    throw new Error(
      "GetProjectDataForHomepage threw the following error: " + e
    );
  }
}

export async function GetProjectFromApi(
  slug: string
): Promise<SingleContentfulEntry> {
  try {
    const response = await GetContentfulProject(slug);
    return mapContentfulReponseToSingleContentfulEntry(response);
  } catch (e) {
    throw new Error("GetProjectFromApi threw the following error: " + e);
  }
}
