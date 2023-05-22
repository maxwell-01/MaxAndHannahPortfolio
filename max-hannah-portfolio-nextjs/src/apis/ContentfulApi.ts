import {Entry, EntryCollection} from 'contentful';
import {ContentfulSectionEntry, Project} from "../types/ContentfulTypes";
import {ContentfulEntriesApiUrl} from "../urls";


export async function fetchEntriesFromContentful(params?: {
    [key: string]: string;
}): Promise<EntryCollection<Project>> {
    const accessToken = process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN;

    const paramsUrl =
        params != undefined
            ? '?' +
              new URLSearchParams(params).toString().replaceAll('%2C', ',')
            : '';
    let requestUrl = ContentfulEntriesApiUrl + paramsUrl;

    const result = await fetch(requestUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        next: {
            revalidate: 0, // number of seconds for nextjs to cache before fetching fresh data
        },
    });

    if (!result.ok) {
        throw new Error('Failed to fetch data from Contentful API');
    }

    return await result.json();
}

export async function fetchEntryFromContentful(entryId: string): Promise<ContentfulSectionEntry> {
    const accessToken = process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN;
    
    let requestUrl = ContentfulEntriesApiUrl + entryId;

    const result = await fetch(requestUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        next: {
            revalidate: 0, // number of seconds for nextjs to cache before fetching fresh data
        },
    });

    if (!result.ok) {
        throw new Error(`Failed to fetch entry of id: ${entryId} from Contentful API`);
    }

    return await result.json();
}
