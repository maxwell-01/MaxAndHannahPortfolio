import { strict as assert } from "assert";
import { EnvironmentGetter } from "contentful-typescript-codegen";
import { createClient } from "contentful";

const getContentfulEnvironment: EnvironmentGetter = async () => {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN } =
    process.env;

  assert(CONTENTFUL_SPACE_ID);
  assert(CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN);

  return createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  });
};

module.exports = getContentfulEnvironment;
