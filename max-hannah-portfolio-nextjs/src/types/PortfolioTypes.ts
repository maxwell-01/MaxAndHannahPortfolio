export const PortfolioHomePageData = {};

export type PortfolioAsset = {
    metadata: PortfolioMetadata;
    fields: {
        title: string;
        description: string;
        url: string;
        details: {
            size: number;
            image?: {
                width: number;
                height: number;
            };
        };
        fileName: string;
        contentType: string;
    };
};

export type PortfolioMetadata = {
    id: string;
    createdAt: string;
    updatedAt: string;
    contentType?: string;
};

export type PortfolioSection = {
    metadata: PortfolioMetadata;
    fields: PortfolioFields;
};

export type PortfolioFields =
    | OneColumnTextFields
    | FullWidthMediaFields
    | IconWithTextFields
    | SubSectionFields
    | FullWidthSubSectionFields;

export type OneColumnTextFields = {
    readonly title?: string;
    readonly richTextHtml: string;
    readonly backgroundColourHexCode?: string;
};

export type FullWidthMediaFields = {
    readonly title?: string;
    readonly altText?: string;
    readonly media?: PortfolioAsset;
};

export type IconWithTextFields = {
    readonly title?: string;
    readonly icon?: PortfolioAsset;
    readonly text?: string;
};

export type SubSectionFields = {
    readonly title?: string;
    readonly backgroundColourHexCode?: string;
    readonly sections?: ReadonlyArray<PortfolioSection>;
};

export type FullWidthSubSectionFields = {
    readonly title?: string;
    readonly backgroundColourHexCode?: string;
    readonly sections?: ReadonlyArray<PortfolioSection>;
};
