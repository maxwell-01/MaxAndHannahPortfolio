import { fetchEntriesFromContentful } from './ContentfulApi';
import { ContentfulEntries } from '../types/ContentfulTypes';

export const GetContentfulDataForHomePageFromApi = async (
  numberOfProjectsToFetch: number
): Promise<ContentfulEntries> => {
  const fieldsToFetch = `sys.id,fields.title,fields.slug,fields.description,fields.thumbnail,fields.featuredImage`;
  const params = {
    limit: numberOfProjectsToFetch.toString(),
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

  return data;
};

export const GetContentfulProject = async (
  slug: string
): Promise<ContentfulEntries> => {
  const params = {
    'fields.slug': slug,
    content_type: 'project',
  };
  const data = await fetchEntriesFromContentful(params);

  if (data.items.length > 1) {
    throw new Error(
      `Expected one project, found ${data.items.length} projects for slug: ${slug}`
    );
  }

  return data;
};
