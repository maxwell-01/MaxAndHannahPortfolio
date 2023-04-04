import { ComponentType } from "react";
import OneColumnTextComponent from "@/src/components/ContentfulSections/OneColumnTextComponent";
import FullWidthMediaComponent from "@/src/components/ContentfulSections/FullWidthMediaComponent";

type componentMap = {
  [key: string]: ComponentType<any>;
};

export const ComponentByContentfulContentTypeId: componentMap = {
  oneColumnText: OneColumnTextComponent,
  fullWidthMedia: FullWidthMediaComponent,
};
