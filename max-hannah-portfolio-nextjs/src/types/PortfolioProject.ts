import { PortfolioAsset, PortfolioSection } from '@/src/types/PortfolioTypes';

export type PortfolioProjects = {
    projects: ReadonlyArray<PortfolioProject>;
};

export type PortfolioProject = {
    readonly slug: string;
    readonly title: string;
    readonly description: string;
    readonly thumbnail: PortfolioAsset;
    readonly featuredImage: PortfolioAsset;
    readonly sections?: ReadonlyArray<PortfolioSection>;
};
