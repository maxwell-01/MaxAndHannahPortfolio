import {ContentfulEntryCollectionToPortfolioProjects} from "@/src/mappers/ContentfulProjectMapper";
import {testContentfulEntries} from "@/src/testingData/ContentfulTestData";


describe('ContentfulEntryCollectionToPortfolioProjects_mapsContentfulDataToPortfolioData', () => {
    
    it('should convert Contentful entry collections to portfolio projects', () => {
        
        // Act
        const portfolioProjects = ContentfulEntryCollectionToPortfolioProjects(testContentfulEntries)
        
        // Assert
        expect(portfolioProjects.projects).toHaveLength(10);
    })
})