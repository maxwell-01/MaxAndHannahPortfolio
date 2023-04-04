import { Entry } from "contentful";
import { FullWidthMedia } from "@/src/types/ContentfulTypes";

type Props = {
  entry: Entry<FullWidthMedia>;
};

const FullWidthMediaComponent = ({ entry }: Props) => {
  return (
    <>
      <div>Full width media component</div>
      <h2>{entry.fields.title}</h2>
    </>
  );
};

export default FullWidthMediaComponent;
