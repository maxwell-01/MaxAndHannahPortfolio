import { ProjectDto } from "@/data/ProjectsData";
import { createClient } from "contentful";

// async function getContentfulData(): Promise<Array<ProjectDto>> {
//   if (process.env.CONTENTFUL_SPACE_ID == undefined) {
//     throw new Error("CONTENTFUL_SPACE_ID is not defined");
//   }
//
//   if (process.env.CONTENTFUL_ACCESS_KEY == undefined) {
//     throw new Error("CONTENTFUL_ACCESS_KEY is not defined");
//   }
//
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//   });
//
//   const res = await client.getEntries({ content_type: "project" });
//
//   const environment = await client.
//
//   return res.items;
// }
