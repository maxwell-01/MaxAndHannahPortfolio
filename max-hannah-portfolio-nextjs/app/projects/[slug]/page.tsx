import { GetProjectFromApi } from "@/src/apis/apis";
import { extractSectionsEntries } from "@/src/apis/ContentfulService";

type Props = {
  params: { slug: string };
};
const Page = async ({ params }: Props) => {
  const project = await GetProjectFromApi(params.slug);

  const fields = project.item.fields;

  const sections = extractSectionsEntries(project);

  return (
    <>
      <div>Project page for project: {params.slug}</div>
      <div>Title: {fields.title}</div>
      <div>{fields.description}</div>
    </>
  );
};

export default Page;
