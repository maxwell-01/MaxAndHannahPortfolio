import {
  PortfolioAsset,
  PortfolioMetadata,
  PortfolioSection,
} from './PortfolioTypes';

export type PortfolioProjects = {
  projects: ReadonlyArray<PortfolioProject>;
  errors?: ReadonlyArray<any>;
};

export type PortfolioProject = {
  readonly metadata: PortfolioMetadata;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly thumbnail: PortfolioAsset;
  readonly featuredImage: PortfolioAsset;
  readonly sections?: ReadonlyArray<PortfolioSection>;
};
