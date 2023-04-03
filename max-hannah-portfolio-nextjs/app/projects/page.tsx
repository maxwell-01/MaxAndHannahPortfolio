import { GetProjectDataForHomepage } from "@/src/apis/apis";
import { Asset } from "contentful";

const Projects = async () => {
  const project = await GetProjectDataForHomepage();
  const assets: Array<Asset> = project.includes.Asset;

  return (
    <>
      <div>This is the all projects page.</div>
    </>
  );
};

export default Projects;
