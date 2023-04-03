import React from "react";
import { ComponentByContentfulContentTypeId } from "@/src/ComponentByContentfulContentTypeId";
import { Entry } from "contentful";
import { ContentfulSection } from "@/src/types/ContentfulTypes";

type DynamicComponentWrapperProps = {
  type: string;
  props: Entry<ContentfulSection>;
};
const DynamicComponentWrapper = ({
  type,
  props,
}: DynamicComponentWrapperProps) => {
  return React.createElement(ComponentByContentfulContentTypeId[type], props);
};

export default DynamicComponentWrapper;
