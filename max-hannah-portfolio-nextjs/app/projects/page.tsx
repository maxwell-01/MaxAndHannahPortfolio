import { GetProjectDataForHomepage } from '../../src/apis/apis';

const Projects = async () => {
  const project = await GetProjectDataForHomepage(10);

  return (
    <>
      <div>This is the all projects page.</div>
    </>
  );
};

export default Projects;
