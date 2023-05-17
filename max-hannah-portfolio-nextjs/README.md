## Portfolio

A portfolio website built with Next JS using Contentful as a headless CMS. The key objective of this site
was to demonstrate the ability to build a custom front end that uses data from a CMS. The CMS input needed to be 
flexible, ie a non-technical user should be able to rearrange content in contentful and optionally include sections
and the front-end should mirror this.

Please see the '[Things I would do differently](#things-i-would-do-differently)' section at the bottom of this readme 
for more info.

## Contentful

Objects are defined in contentful. If you change or add a model in Contentful you must update the type models in this
project.Download an update of the types from contentful:

`generateContentfulTypes SPACE_ID ACCESS_TOKEN -o importedContentfulApiTypes.d.ts`

The space ID and access token can be found by:

1. Logging into Contentful [here](https://app.contentful.com/spaces/)
2. Navigating to `Settings` (top right) and select `API Keys`
3. Copy the `Space ID` and `Content Delivery API - access token`

A file called 'importedContentfulApiTypes.d.ts' will be saved to the project root.
This file contains the types all user generated models in the contentful space and can be used to update this projects 
types.
You will find this projects types at: `src/types/ContentfulTypes.ts`

Please note: this file contains many `<any>` types which have been replaced in `src/types/ContentfulTypes.ts`, don't
overwrite these unknowingly.

Take what you need from the file and delete it to save from accidentally referencing its exports. Update the internal
 types and mappers stored in `types` and `mappers`.

## Setup

- This project was built with Node version 18.16.0
- run `npm install` to install the dependencies

The following are required before you can run the application:

-   Open the `.env.local` file at the root of the project and populate the keys. Request keys from repo own if you
dont have them.

## Running the application locally

First, run the development server:

```bash
npm run dev
```

Second, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Things I would do differently
Below is a list of changes or additional developments I would make if this was to be production code:
* Generalise and abstract out contentful mapper into separate solution that can be reused in other projects


# Notes
Points of interest in this project
* There are several ways to render rich html from CMS systems in React. I deliberately opted to receive the data as json
and create a recursive mapper. This means work has to be redone if a switch of CMS is required and the format changes
but reduces the risk of cross site scripting.