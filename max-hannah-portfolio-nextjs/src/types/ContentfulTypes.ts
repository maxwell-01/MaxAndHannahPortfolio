import {
    Asset,
    ContentTypeLink,
    Entry,
    EntryCollection,
    EnvironmentLink,
    Metadata,
    RichTextData,
    RichTextDataTarget,
    RichTextNodeType,
    SpaceLink,
    Sys,
} from 'contentful';

export interface ContentfulEntries {
    sys: {
        type: string;
    };
    total: number;
    skip: number;
    limit: number;
    items: ReadonlyArray<ApiEntry<Project>>;
    includes: ContentfulIncludes;
    errors?: ReadonlyArray<any>;
}
export interface ApiEntry<T> {
    sys: Sys;
    fields: T;
    metadata: Metadata;
}

export const Project = 'project';

export interface Project {
    readonly description: string;
    readonly featuredImage: RichTextDataTarget;
    readonly sections?: ReadonlyArray<RichTextDataTarget>;
    readonly slug: string;
    readonly thumbnail: RichTextDataTarget;
    readonly title: string;
}

export interface ContentfulProjectEntryCollection
    extends EntryCollection<Project> {
    errors?: Array<any>;
    includes: ContentfulIncludes;
}

export type ContentfulIncludes = {
    Asset: Array<ApiAsset>;
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

export interface ApiAsset {
    sys: {
        type: string;
        id: string;
        createdAt: string;
        updatedAt: string;
        locale: string;
        revision?: number;
        space?: {
            sys: SpaceLink;
        };
        environment?: {
            sys: EnvironmentLink;
        };
        contentType?: {
            sys: ContentTypeLink;
        };
    };
    fields: {
        title: string;
        description: string;
        file: {
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
    metadata: Metadata;
}

export type ContentfulSectionEntry =
    | FullWidthMediaEntry
    | FullWidthSubSectionEntry
    | IconWithTextEntry
    | OneColumnTextEntry
    | SubSectionEntry;

export interface FullWidthMediaEntry extends ApiEntry<FullWidthMedia> {
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
    readonly altText?: string;
    readonly media?: RichTextDataTarget;
    readonly title?: string;
}

export interface FullWidthSubSectionEntry
    extends ApiEntry<FullWidthSubSection> {
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
    readonly backgroundColourHexCode?: string;
    readonly sections?: ReadonlyArray<RichTextDataTarget>;
    readonly title?: string;
}

export interface IconWithTextEntry extends ApiEntry<IconWithText> {
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
    readonly icon?: Asset;
    readonly text?: string;
    readonly title?: string;
}

export interface OneColumnTextEntry extends ApiEntry<OneColumnText> {
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
    readonly backgroundColourHexCode?: string;
    readonly text: { content: any; data: any; nodeType: string };
    readonly title?: string;
}

export interface SubSectionEntry extends ApiEntry<SubSection> {
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
