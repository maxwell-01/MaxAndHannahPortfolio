import {
    ContentfulProjectEntryCollection,
    mapContentfulResponseToSingleContentfulEntry,
    SingleContentfulEntry,
} from '@/src/types/ContentfulTypes';
import {
    GetContentfulDataForHomePageFromApi,
    GetContentfulProject,
} from '@/src/apis/ContentfulService';

export const GetProjectDataForHomepage =
    async (): Promise<ContentfulProjectEntryCollection> => {
        try {
            return await GetContentfulDataForHomePageFromApi();
        } catch (e) {
            throw new Error(
                'GetProjectDataForHomepage threw the following error: ' + e
            );
        }
    };

export const GetProjectFromApi = async (
    slug: string
): Promise<SingleContentfulEntry> => {
    try {
        const response = await GetContentfulProject(slug);
        return mapContentfulResponseToSingleContentfulEntry(response);
    } catch (e) {
        throw new Error('GetProjectFromApi threw the following error: ' + e);
    }
};
