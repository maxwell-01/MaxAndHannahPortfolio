import { GetProjectFromApi } from '@/src/apis/apis';
import { getSectionsFromIncludesByItem } from '@/src/apis/ContentfulService';
import DynamicComponentWrapper from '@/src/components/DynamicComponentWrapper';

type Props = {
    params: { slug: string };
};
const Page = async ({ params }: Props) => {
    const project = await GetProjectFromApi(params.slug);
    const fields = project.item.fields;
    const projectHasSections =
        fields.sections?.length && fields.sections.length > 0;

    return (
        <>
            <div className={'font-bold'}>
                Project page for project: {params.slug}
            </div>
            <div className={'font-bold'}>Title: {fields.title}</div>
            <div>{fields.description}</div>
            {projectHasSections &&
                getSectionsFromIncludesByItem(project).map((section) => (
                    <DynamicComponentWrapper
                        key={section.sys.id}
                        contentType={section.sys.contentType.sys.id}
                        entry={section}
                    />
                ))}
        </>
    );
};

export default Page;
