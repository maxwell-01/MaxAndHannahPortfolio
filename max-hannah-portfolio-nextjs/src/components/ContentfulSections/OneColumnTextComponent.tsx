import { Entry } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { OneColumnText } from "@/src/types/ContentfulTypes";

type Props = {
  entry: Entry<OneColumnText>;
};

const OneColumnTextComponent = ({ entry }: Props) => {
  return (
    <>
      <div>One column text component</div>
      <h2>{entry.fields.title}</h2>
      <div>{documentToReactComponents(entry.fields.text as Document)}</div>
    </>
  );
};

export default OneColumnTextComponent;
