import { EntryCollection } from 'contentful';
import { ContentfulEntriesApiUrl } from '@/src/urls';
import { Project } from '@/src/types/ContentfulTypes';

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
            revalidate: 0, // number of seconds to cache before fetching fresh data
        },
    });

    if (!result.ok) {
        throw new Error('Failed to fetch data from Contentful API');
    }

    return await result.json();
}
