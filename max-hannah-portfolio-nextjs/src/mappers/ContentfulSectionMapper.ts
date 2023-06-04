import {
  ApiAsset,
  ContentfulIncludes,
  ContentfulSectionEntry,
  FullWidthMediaEntry,
  FullWidthSubSectionEntry,
  IconWithTextEntry,
  OneColumnTextEntry,
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
    fields,
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
    return createFullWidthMediaFields(
      contentfulSectionEntry as FullWidthMediaEntry,
      includes
    );
  }

  if (
    matchesContentfulSection<FullWidthSubSectionEntry>(
      contentfulSectionEntry,
      'fullWidthSubSection'
    )
  ) {
    return createFullWidthSubSectionFields(
      contentfulSectionEntry as FullWidthSubSectionEntry,
      includes
    );
  }

  if (
    matchesContentfulSection<IconWithTextEntry>(
      contentfulSectionEntry,
      'iconWithText'
    )
  ) {
    return createIconWithTextFields(
      contentfulSectionEntry as IconWithTextEntry,
      includes
    );
  }

  if (
    matchesContentfulSection<OneColumnTextEntry>(
      contentfulSectionEntry,
      'oneColumnText'
    )
  ) {
    return createOneColumnTextFields(
      contentfulSectionEntry as OneColumnTextEntry
    );
  }

  if (
    matchesContentfulSection<SubSectionEntry>(
      contentfulSectionEntry,
      'subSection'
    )
  ) {
    return createFullWidthSubSectionFields(
      contentfulSectionEntry as SubSectionEntry,
      includes
    );
  }

  throw new Error('Content not supported.');
};

const matchesContentfulSection = <TEntry extends ContentfulSectionEntry>(
  entry: ContentfulSectionEntry,
  entryId: string
): entry is TEntry => entry.sys.contentType.sys.id === entryId;

const createFullWidthMediaFields = async (
  contentfulSection: FullWidthMediaEntry,
  includes: ContentfulIncludes
): Promise<FullWidthMediaFields> => {
  const media = contentfulSection.fields.media;

  if (!media) {
    throw new Error(
      `No media object on entry of id: ${contentfulSection.sys.id}`
    );
  }

  const asset = await getAssetItemById(includes.Asset, media.sys.id);

  return {
    title: contentfulSection.fields.title,
    altText: contentfulSection.fields.altText,
    media: portfolioAssetFromContentfulAsset(asset),
  };
};

const createOneColumnTextFields = (
  contentfulSection: OneColumnTextEntry
): OneColumnTextFields => {
  return {
    title: contentfulSection.fields.title,
    richTextHtml: contentfulSection.fields.text.content.map(convertToHtml),
    backgroundColourHexCode: contentfulSection.fields.backgroundColourHexCode,
  };
};

const createFullWidthSubSectionFields = async (
  contentfulSection: FullWidthSubSectionEntry | SubSectionEntry,
  includes: ContentfulIncludes
): Promise<FullWidthSubSectionFields> => {
  const sections = contentfulSection.fields.sections ?? [];

  const resolvedSections = await Promise.all(
    sections.map((section) =>
      portfolioSectionFromContentfulSection(includes, section)
    )
  );

  return {
    title: contentfulSection.fields.title,
    backgroundColourHexCode: contentfulSection.fields.backgroundColourHexCode,
    sections: resolvedSections,
  };
};

const createIconWithTextFields = async (
  contentfulSection: IconWithTextEntry,
  includes: ContentfulIncludes
): Promise<IconWithTextFields> => {
  const icon = contentfulSection.fields.icon;

  if (!icon) {
    throw new Error(
      `No icon object on entry of id: ${contentfulSection.sys.id}`
    );
  }

  const asset = await getAssetItemById(includes.Asset, icon.sys.id);

  return {
    title: contentfulSection.fields.title,
    icon: portfolioAssetFromContentfulAsset(asset),
    text: contentfulSection.fields.text,
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
