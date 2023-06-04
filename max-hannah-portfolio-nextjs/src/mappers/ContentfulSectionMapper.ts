import {
  ApiAsset,
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
} from '../types/ContentfulTypes';
import { RichTextDataTarget } from 'contentful';
import {
  FullWidthMediaFields,
  FullWidthSubSectionFields,
  IconWithTextFields,
  OneColumnTextFields,
  PortfolioAsset,
  PortfolioFields,
  PortfolioSection,
} from '../types/PortfolioTypes';
import { getAssetItemById, getEntryItemById } from './ContentfulProjectMapper';
import { convertToHtml } from './RichTextToHtmlMapper';

export const portfolioSectionFromContentfulSection = async (
  includes: ContentfulIncludes,
  section: RichTextDataTarget
): Promise<PortfolioSection<PortfolioFields>> => {
  const sectionId = section.sys.id;
  const contentfulSectionEntry = await getEntryItemById(
    includes.Entry,
    sectionId
  );

  const fields = await GetPortfolioFieldsFromContentfulFields(
    contentfulSectionEntry,
    includes
  );

  return {
    metadata: {
      id: contentfulSectionEntry.sys.id,
      createdAt: contentfulSectionEntry.sys.createdAt,
      updatedAt: contentfulSectionEntry.sys.updatedAt,
      contentType: contentfulSectionEntry.sys.contentType.sys.id,
    },
    fields: fields,
  };
};

const GetPortfolioFieldsFromContentfulFields = async (
  contentfulSectionEntry: ContentfulSectionEntry,
  includes: ContentfulIncludes
): Promise<PortfolioFields> => {
  if (
    matchesContentfulSection<FullWidthMediaEntry>(
      contentfulSectionEntry,
      'fullWidthMedia'
    )
  ) {
    let entryItemById = (await getEntryItemById(
      includes.Entry,
      contentfulSectionEntry.sys.id
    )) as FullWidthMediaEntry;

    if (entryItemById.fields.media == undefined) {
      throw new Error(
        `No media object on entry of id: ${entryItemById.sys.id}`
      );
    }

    return portfolioFullWidthMediaSectionFromContentfulSection(
      contentfulSectionEntry.fields,
      getAssetItemById(includes.Asset, entryItemById.fields.media.sys.id)
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
    let entryItemById = (await getEntryItemById(
      includes.Entry,
      contentfulSectionEntry.sys.id
    )) as IconWithTextEntry;

    if (entryItemById.fields.icon == undefined) {
      throw new Error(`No icon object on entry of id: ${entryItemById.sys.id}`);
    }

    return iconWithTextSectionFromContentfulSection(
      contentfulSectionEntry.fields,
      getAssetItemById(includes.Asset, entryItemById.fields.icon.sys.id)
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
  asset: ApiAsset
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
    richTextHtml: contentfulSection.text.content.map(convertToHtml),
    backgroundColourHexCode: contentfulSection.backgroundColourHexCode,
  };
};

const portfolioFullWidthSubSectionFromContentfulSection = async (
  includes: ContentfulIncludes,
  contentfulSection: FullWidthSubSection
): Promise<FullWidthSubSectionFields> => {
  return {
    title: contentfulSection.title,
    backgroundColourHexCode: contentfulSection.backgroundColourHexCode,
    sections: await Promise.all(
      contentfulSection.sections?.map(async (section) =>
        portfolioSectionFromContentfulSection(includes, section)
      ) ?? []
    ),
  };
};

const portfolioSubSubSectionFromContentfulSection = async (
  includes: ContentfulIncludes,
  contentfulSection: SubSection
): Promise<FullWidthSubSectionFields> => {
  return {
    title: contentfulSection.title,
    backgroundColourHexCode: contentfulSection.backgroundColourHexCode,
    sections: await Promise.all(
      contentfulSection.sections?.map(async (section) =>
        portfolioSectionFromContentfulSection(includes, section)
      ) ?? []
    ),
  };
};

const iconWithTextSectionFromContentfulSection = (
  contentfulSection: IconWithText,
  asset: ApiAsset
): IconWithTextFields => {
  return {
    title: contentfulSection.title,
    icon: portfolioAssetFromContentfulAsset(asset),
    text: contentfulSection.text,
  };
};

const portfolioAssetFromContentfulAsset = (
  contentfulAsset: ApiAsset
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
