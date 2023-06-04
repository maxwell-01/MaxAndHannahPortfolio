import { GetProject } from '@/src/apis/apis';
import DynamicComponentWrapper from '../../../src/components/DynamicComponentWrapper';

type Props = {
  params: { slug: string };
};
const Page = async ({ params }: Props) => {
  const project = await GetProject(params.slug);
  const projectHasSections =
    project.sections?.length && project.sections.length > 0;

  return (
    <>
      <div className={'font-bold'}>Project page for project: {params.slug}</div>
      <div className={'font-bold'}>Title: {project.title}</div>
      <div>{project.description}</div>
      {projectHasSections &&
        project.sections.map((section) => (
          <DynamicComponentWrapper
            key={section.metadata.id}
            contentType={section.metadata.contentType}
            section={section}
          />
        ))}
    </>
  );
};

export default Page;
