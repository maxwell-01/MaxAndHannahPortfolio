type Props = {
  params: { title: string };
};
const Page = ({ params }: Props) => {
  return <div>Project page for project: {params.title}</div>;
};

export default Page;
