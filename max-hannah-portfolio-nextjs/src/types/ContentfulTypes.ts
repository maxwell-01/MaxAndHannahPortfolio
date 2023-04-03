import { Asset, Entry, EntryCollection, RichTextDataTarget } from "contentful";

export const FullWidthMedia = "fullWidthMedia";
export interface FullWidthMedia {
  //Full width media
  /*  */
  readonly altText?: string;
  readonly media?: Asset;
  readonly title?: string;
}

export const FullWidthSubSection = "fullWidthSubSection";
export interface FullWidthSubSection {
  //Full width subsection
  /*  */
  readonly backgroundColourHexCode?: string;
  readonly sections?: ReadonlyArray<RichTextDataTarget>;
  readonly title?: string;
}

export const IconWithText = "iconWithText";
export interface IconWithText {
  //Icon with text
  /*  */
  readonly icon?: Asset;
  readonly text?: string;
  readonly title?: string;
}

export const OneColumnText = "oneColumnText";
export interface OneColumnText {
  //One column text
  /*  */
  readonly backgroundColourHexCode?: string;
  readonly text: { content: any; data: any; nodeType: string };
  readonly title?: string;
}

export const Project = "project";
export interface Project {
  //Project
  /*  */
  readonly description: string;
  readonly featuredImage: Asset;
  readonly sections?: ReadonlyArray<RichTextDataTarget>;
  readonly slug: string;
  readonly thumbnail: Asset;
  readonly title: string;
}

export const SubSection = "subSection";
export interface SubSection {
  //Sub section
  /*  */
  readonly backgroundColourHexCode?: string;
  readonly description?: string;
  readonly sections?: ReadonlyArray<RichTextDataTarget>;
  readonly title?: string;
}

export type ContentfulSection =
  | FullWidthMedia
  | IconWithText
  | OneColumnText
  | SubSection
  | FullWidthSubSection;

export interface ContentfulHomePageEntryCollection
  extends EntryCollection<Project> {
  errors?: Array<any>;
  includes: {
    Asset: Array<Asset>;
  };
}

export interface SingleContentfulEntry {
  total: number;
  skip: number;
  limit: number;
  item: Entry<Project>;
  errors?: Array<any>;
  includes: {
    Asset: Array<Asset>;
    Entry: Array<Entry<ContentfulSection>>;
  };
}

export function mapContentfulReponseToSingleContentfulEntry(
  response: EntryCollection<Project>
): SingleContentfulEntry {
  return {
    total: response.total,
    skip: response.skip,
    limit: response.limit,
    item: response.items[0],
    errors: response?.errors,
    includes: {
      Asset: response.includes?.Asset,
      Entry: response.includes?.Entry,
    },
  };
}
