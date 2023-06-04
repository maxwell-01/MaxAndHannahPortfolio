import { GetHomepageProjects } from '../../src/apis/apis';

const Projects = async () => {
  const project = await GetHomepageProjects(10);

  return (
    <>
      <div>This is the all projects page.</div>
    </>
  );
};

export default Projects;
