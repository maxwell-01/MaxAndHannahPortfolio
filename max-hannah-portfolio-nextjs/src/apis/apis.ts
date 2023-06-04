import {
  GetContentfulDataForHomePageFromApi,
  GetContentfulProject,
} from './ContentfulService';
import { PortfolioProject, PortfolioProjects } from '../types/PortfolioProject';
import { ContentfulEntryCollectionToPortfolioProjects } from '../mappers/ContentfulProjectMapper';

export const GetProjectDataForHomepage = async (
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

export const GetProjectFromApi = async (
  projectSlug: string
): Promise<PortfolioProject> => {
  try {
    const contentfulData = await GetContentfulProject(projectSlug);
    const portfolioData = await ContentfulEntryCollectionToPortfolioProjects(
      contentfulData
    );

    return portfolioData.projects[0];
  } catch (error) {
    throw new ApiError(
      'ApiError',
      `An error occurred while fetching data from the API: ${
        (error as Error).message
      }`
    );
  }
};
