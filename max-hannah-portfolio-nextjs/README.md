## Portfolio
A portfolio website to display software desgined by Hannah and build by Max.
Built with Next JS using Contentful as a headless CMS.

## Contentful

Objects are defined in contentful. If you change or add a model you must update the type models in this project.
Download an update of the types from contentful:

`generateContentfulTypes SPACE_ID ACCESS_TOKEN -o importedContentfulApiTypes.d.ts`

The space ID and access token can be found by:
1. Logging into Contentful [here](https://app.contentful.com/spaces/)
2. Navigating to `Settings` (top right) and select `API Keys`
3. Copy the `Space ID` and `Content Delivery API - access token`

A file called 'importedContentfulApiTypes.d.ts' will be saved to the project root.
This file contains the types all user generated models in the contentful space and can be used to update this projects types.
You will find this projects types at: `src/types/ContentfulTypes.ts`

Please note: this file contains many `<any>` types which have been replaced in `src/types/ContentfulTypes.ts`, don't overwrite these unknowingly.

Take what you need from the file and delete it to save from accidentally referencing its exports.

## Setup
The following are required before you can run the application:
* Open the `.env.local` file at the root of the project and populate the keys, see above for Contentful info.

## Running the application locally

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Next JS

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Todo
Consume json data received from Contentful, create a objects for each type of data
Give each object an index so we know what order to render them in

nested objects? Just create another wrapper component?