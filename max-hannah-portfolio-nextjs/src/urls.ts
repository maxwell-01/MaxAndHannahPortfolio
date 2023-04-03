const spaceId = process.env.CONTENTFUL_SPACE_ID;
const environmentId = "master";

export const urlProtocol: string = "https:";

const ContentfulApiBaseUrl: string = urlProtocol + "//cdn.contentful.com";

const ContentfulApiUrl =
  ContentfulApiBaseUrl + `/spaces/${spaceId}/environments/${environmentId}`;

export const ContentfulEntriesApiUrl = ContentfulApiUrl + "/entries";
