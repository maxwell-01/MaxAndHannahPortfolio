import { ContentfulEntryCollectionToPortfolioProjects } from './ContentfulProjectMapper';
import { testContentfulEntries } from '../testingData/ContentfulTestData';

describe('ContentfulEntryCollectionToPortfolioProjects_mapsContentfulDataToPortfolioData', () => {
  it('should convert Contentful entry collections to portfolio projects', async () => {
    // Act
    const portfolioProjects =
      await ContentfulEntryCollectionToPortfolioProjects(testContentfulEntries);

    // Assert
    expect(portfolioProjects.projects).toHaveLength(10);
    expect(
      portfolioProjects.projects[0].sections![0].metadata.contentType ==
        'oneColumnText'
    );
  });
});
