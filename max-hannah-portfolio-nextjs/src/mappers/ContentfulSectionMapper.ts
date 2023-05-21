import { Asset, RichTextDataTarget } from 'contentful';
import {
    ContentfulIncludes,
    ContentfulSectionEntry,
    FullWidthMedia,
    FullWidthMediaEntry,
    FullWidthSubSection,
    FullWidthSubSectionEntry,
    IconWithText,
    IconWithTextEntry,
    OneColumnText,
    OneColumnTextEntry,
    SubSection,
    SubSectionEntry,
} from '@/src/types/ContentfulTypes';
import {
    FullWidthMediaFields,
    FullWidthSubSectionFields,
    IconWithTextFields,
    OneColumnTextFields,
    PortfolioAsset,
    PortfolioFields,
    PortfolioSection,
} from '@/src/types/PortfolioTypes';
import {
    getAssetItemById,
    getEntryItemById,
} from '@/src/mappers/ContentfulProjectMapper';

export const portfolioSectionFromContentfulSection = (
    includes: ContentfulIncludes,
    section: RichTextDataTarget
): PortfolioSection => {
    const sectionId = section.sys.id;
    const contentfulSectionEntry = getEntryItemById(includes.Entry, sectionId);

    const fields = GetPortfolioFieldsFromContentfulFields(
        contentfulSectionEntry,
        includes
    );

    return {
        metadata: {
            id: contentfulSectionEntry.sys.id,
            createdAt: contentfulSectionEntry.sys.createdAt,
            updatedAt: contentfulSectionEntry.sys.updatedAt,
            contentType: contentfulSectionEntry.sys.contentType.sys.linkType,
        },
        fields: fields,
    };
};

const GetPortfolioFieldsFromContentfulFields = (
    contentfulSectionEntry: ContentfulSectionEntry,
    includes: ContentfulIncludes
): PortfolioFields => {
    if (
        matchesContentfulSection<FullWidthMediaEntry>(
            contentfulSectionEntry,
            'fullWidthMedia'
        )
    ) {
        return portfolioFullWidthMediaSectionFromContentfulSection(
            contentfulSectionEntry.fields,
            getAssetItemById(includes.Asset, contentfulSectionEntry.sys.id)
        );
    }

    if (
        matchesContentfulSection<FullWidthSubSectionEntry>(
            contentfulSectionEntry,
            'fullWidthSubSection'
        )
    ) {
        return portfolioFullWidthSubSectionFromContentfulSection(
            includes,
            contentfulSectionEntry.fields
        );
    }

    if (
        matchesContentfulSection<IconWithTextEntry>(
            contentfulSectionEntry,
            'iconWithText'
        )
    ) {
        return iconWithTextSectionFromContentfulSection(
            contentfulSectionEntry.fields,
            getAssetItemById(includes.Asset, contentfulSectionEntry.sys.id)
        );
    }

    if (
        matchesContentfulSection<OneColumnTextEntry>(
            contentfulSectionEntry,
            'oneColumnText'
        )
    ) {
        return portfolioOneColumnTextFieldsFromContentfulSection(
            contentfulSectionEntry.fields
        );
    }

    if (
        matchesContentfulSection<SubSectionEntry>(
            contentfulSectionEntry,
            'subSection'
        )
    ) {
        return portfolioSubSubSectionFromContentfulSection(
            includes,
            contentfulSectionEntry.fields
        );
    }

    throw new Error(`Content not supported.`);
};

const matchesContentfulSection = <TEntry extends ContentfulSectionEntry>(
    entry: ContentfulSectionEntry,
    entryId: string
): entry is TEntry => entry.sys.contentType.sys.id === entryId;

const portfolioFullWidthMediaSectionFromContentfulSection = (
    contentfulSection: FullWidthMedia,
    asset: Asset
): FullWidthMediaFields => {
    return {
        title: contentfulSection.title,
        altText: contentfulSection.altText,
        media: portfolioAssetFromContentfulAsset(asset),
    };
};

const portfolioOneColumnTextFieldsFromContentfulSection = (
    contentfulSection: OneColumnText
): OneColumnTextFields => {
    return {
        title: contentfulSection.title,
        richTextHtml: convertToHtml(contentfulSection.text.content),
        backgroundColourHexCode: contentfulSection.backgroundColourHexCode,
    };
};

const portfolioFullWidthSubSectionFromContentfulSection = (
    includes: ContentfulIncludes,
    contentfulSection: FullWidthSubSection
): FullWidthSubSectionFields => {
    return {
        title: contentfulSection.title,
        backgroundColourHexCode: contentfulSection.backgroundColourHexCode,
        sections: contentfulSection.sections?.map((section) =>
            portfolioSectionFromContentfulSection(includes, section)
        ),
    };
};

const portfolioSubSubSectionFromContentfulSection = (
    includes: ContentfulIncludes,
    contentfulSection: SubSection
): FullWidthSubSectionFields => {
    return {
        title: contentfulSection.title,
        backgroundColourHexCode: contentfulSection.backgroundColourHexCode,
        sections: contentfulSection.sections?.map((section) =>
            portfolioSectionFromContentfulSection(includes, section)
        ),
    };
};

const iconWithTextSectionFromContentfulSection = (
    contentfulSection: IconWithText,
    asset: Asset
): IconWithTextFields => {
    return {
        title: contentfulSection.title,
        icon: portfolioAssetFromContentfulAsset(asset),
        text: contentfulSection.text,
    };
};

const portfolioAssetFromContentfulAsset = (
    contentfulAsset: Asset
): PortfolioAsset => {
    const file = contentfulAsset.fields.file;
    const image = file.details.image;

    return {
        metadata: {
            id: contentfulAsset.sys.id,
            createdAt: contentfulAsset.sys.createdAt,
            updatedAt: contentfulAsset.sys.updatedAt,
            contentType: file.contentType,
        },
        fields: {
            title: contentfulAsset.fields.title,
            description: contentfulAsset.fields.description,
            url: file.url,
            details: {
                size: file.details.size,
                image: image ?? undefined,
            },
            fileName: file.fileName,
            contentType: file.contentType,
        },
    };
};
