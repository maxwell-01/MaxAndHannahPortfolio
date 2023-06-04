export type PortfolioMetadata = {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  contentType: string;
};

export type PortfolioSection<T extends PortfolioFields> = {
  metadata: PortfolioMetadata;
  fields: T;
};

export type PortfolioFields =
  | OneColumnTextFields
  | FullWidthMediaFields
  | IconWithTextFields
  | SubSectionFields
  | FullWidthSubSectionFields;

interface BaseFields {
  title?: string;
  backgroundColourHexCode?: string;
}

export type OneColumnTextFields = BaseFields & {
  richTextHtml: string[];
};

export type FullWidthMediaFields = BaseFields & {
  altText?: string;
  media?: PortfolioAsset;
};

export type IconWithTextFields = BaseFields & {
  icon?: PortfolioAsset;
  text?: string;
};

export type SubSectionFields = BaseFields & {
  sections?: ReadonlyArray<PortfolioSection<PortfolioFields>>;
};

export type FullWidthSubSectionFields = BaseFields & {
  sections?: ReadonlyArray<PortfolioSection<PortfolioFields>>;
};

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
