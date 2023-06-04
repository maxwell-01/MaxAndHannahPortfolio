import {
  GetContentfulDataForHomePageFromApi,
  GetContentfulProject,
} from './ContentfulService';
import { PortfolioProject, PortfolioProjects } from '../types/PortfolioProject';
import { ContentfulEntryCollectionToPortfolioProjects } from '../mappers/ContentfulProjectMapper';
import { ContentfulEntries } from '../types/ContentfulTypes';

export const GetHomepageProjects = async (
  numberOfProjectsToFetch: number
): Promise<PortfolioProjects> => {
  try {
    const contentfulData = await GetContentfulDataForHomePageFromApi(
      numberOfProjectsToFetch
    );
    return ContentfulEntryCollectionToPortfolioProjects(contentfulData);
  } catch (e) {
    throw new Error(
      'GetProjectDataForHomepage threw the following error: ' + e
    );
  }
};

export const GetProject = async (
  projectSlug: string
): Promise<PortfolioProject> => {
  let contentfulData: ContentfulEntries;
  try {
    contentfulData = await GetContentfulProject(projectSlug);
  } catch (error) {
    throw new ApiError(
      'ApiError',
      `An error occurred while fetching data from the API: ${
        (error as Error).message
      }`
    );
  }

  const portfolioData = await ContentfulEntryCollectionToPortfolioProjects(
    contentfulData
  );

  return portfolioData.projects[0];
};
