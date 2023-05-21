import { fetchEntriesFromContentful } from '@/src/apis/ContentfulApi';
import {
    ContentfulProjectEntryCollection,
    ContentfulFields,
    Project,
} from '@/src/types/ContentfulTypes';
import { Asset, Entry, EntryCollection } from 'contentful';

export const GetContentfulDataForHomePageFromApi =
    async (): Promise<ContentfulProjectEntryCollection> => {
        const fieldsToFetch = `sys.id,fields.title,fields.slug,fields.description,fields.thumbnail`;
        const params = {
            limit: '10',
            select: fieldsToFetch,
            content_type: 'project',
        };

        const data = await fetchEntriesFromContentful(params);

        if (data.items.length == 0) {
            throw new Error('No projects returned');
        }

        if (data.includes.Asset.length == 0) {
            throw new Error('No assets returned');
        }

        return data as ContentfulProjectEntryCollection;
    };

export const GetContentfulProject = async (
    slug: string
): Promise<EntryCollection<Project>> => {
    const params = {
        'fields.slug': slug,
        content_type: 'project',
    };
    return await fetchEntriesFromContentful(params);
};

export const getSectionsFromIncludesBySection = (
    item: Entry<Project>,
    includesEntry: ReadonlyArray<Entry<ContentfulFields>>
): Array<Entry<ContentfulFields>> => {
    const sections = item.fields.sections?.map((section) => {
        let entry = includesEntry.find(
            (entry) => entry.sys.id == section.sys.id
        );
        if (entry == undefined) {
            throw new Error(
                `Cannot find entry id ${section.sys.id} in provided Entry array`
            );
        }
        return entry;
    });

    if (sections?.length) {
        return sections;
    }

    throw new Error(`No matching entries returned for item id ${item.sys.id}`);
};
