import {
    Asset,
    Entry,
    EntryCollection,
    RichTextData,
    RichTextDataTarget,
    RichTextNodeType,
    Sys,
} from 'contentful';

export const Project = 'project';
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

export interface ContentfulHomePageEntryCollection
    extends EntryCollection<Project> {
    errors?: Array<any>;
    includes: ContentfulIncludes;
}

export type ContentfulIncludes = {
    Asset: Array<Asset>;
    Entry: Array<ContentfulSectionEntry>;
};

export interface SingleContentfulEntry {
    total: number;
    skip: number;
    limit: number;
    item: Entry<Project>;
    errors?: Array<any>;
    includes: ContentfulIncludes;
}

export interface ContentfulEntries {
    total: number;
    skip: number;
    limit: number;
    items: ReadonlyArray<Entry<Project>>;
    errors?: ReadonlyArray<any>;
    includes: ContentfulIncludes;
}

export type ContentfulSectionEntry =
    | FullWidthMediaEntry
    | FullWidthSubSectionEntry
    | IconWithTextEntry
    | OneColumnTextEntry
    | SubSectionEntry;

export interface FullWidthMediaEntry extends Entry<FullWidthMedia> {
    sys: Sys & {
        contentType: {
            sys: {
                id: 'fullWidthMedia';
            };
        };
    };
}
export const FullWidthMedia = 'fullWidthMedia';
export interface FullWidthMedia {
    //Full width media
    /*  */
    readonly altText?: string;
    readonly media?: Asset;
    readonly title?: string;
}

export interface FullWidthSubSectionEntry extends Entry<FullWidthSubSection> {
    sys: Sys & {
        contentType: {
            sys: {
                id: 'fullWidthSubSection';
            };
        };
    };
}
export const FullWidthSubSection = 'fullWidthSubSection';
export interface FullWidthSubSection {
    //Full width subsection
    /*  */
    readonly backgroundColourHexCode?: string;
    readonly sections?: ReadonlyArray<RichTextDataTarget>;
    readonly title?: string;
}

export interface IconWithTextEntry extends Entry<IconWithText> {
    sys: Sys & {
        contentType: {
            sys: {
                id: 'iconWithText';
            };
        };
    };
}
export const IconWithText = 'iconWithText';
export interface IconWithText {
    //Icon with text
    /*  */
    readonly icon?: Asset;
    readonly text?: string;
    readonly title?: string;
}

export interface OneColumnTextEntry extends Entry<OneColumnText> {
    sys: Sys & {
        contentType: {
            sys: {
                id: 'oneColumnText';
            };
        };
    };
}
export const OneColumnText = 'oneColumnText';
export interface OneColumnText {
    //One column text
    /*  */
    readonly backgroundColourHexCode?: string;
    readonly text: { content: any; data: any; nodeType: string };
    readonly title?: string;
}

export interface SubSectionEntry extends Entry<SubSection> {
    sys: Sys & {
        contentType: {
            sys: {
                id: 'subSection';
            };
        };
    };
}
export const SubSection = 'subSection';
export interface SubSection {
    //Sub section
    /*  */
    readonly backgroundColourHexCode?: string;
    readonly description?: string;
    readonly sections?: ReadonlyArray<RichTextDataTarget>;
    readonly title?: string;
}

export type ContentfulFields =
    | FullWidthMedia
    | IconWithText
    | OneColumnText
    | SubSection
    | FullWidthSubSection;

export interface RichTextContent {
    data: RichTextData;
    content?: RichTextContent[];
    marks: { type: 'bold' | 'underline' | 'code' | 'italic' }[];
    value?: string;
    nodeType: RichTextNodeType;
}

export function mapContentfulResponseToSingleContentfulEntry(
    response: EntryCollection<Project>
): SingleContentfulEntry {
    return {
        total: response.total,
        skip: response.skip,
        limit: response.limit,
        item: response.items[0],
        errors: response?.errors,
        includes: response.includes,
    };
}
