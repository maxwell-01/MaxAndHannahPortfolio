import { fetchEntriesFromContentful } from '@/src/apis/ContentfulApi';
import {
    ContentfulHomePageEntryCollection,
    ContentfulFields,
    Project,
    ContentfulSectionEntry,
} from '@/src/types/ContentfulTypes';
import { Asset, Entry, EntryCollection } from 'contentful';

export const GetContentfulDataForHomePageFromApi =
    async (): Promise<ContentfulHomePageEntryCollection> => {
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

        return data as ContentfulHomePageEntryCollection;
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

export const getAssetItemById = (asset: Array<Asset>, id: string): Asset => {
    const item = asset.find((i) => i.sys.id == id);

    if (item == undefined) {
        throw new Error(`Item with id '${id}' not found in Assets`);
    }
    return item;
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
