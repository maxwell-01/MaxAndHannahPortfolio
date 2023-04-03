import { ComponentType } from "react";
import OneColumnTextComponent from "@/src/components/Sections/OneColumnTextComponent";

type componentMap = {
  [key: string]: ComponentType<any>;
};

export const ComponentByContentfulContentTypeId: componentMap = {
  oneColumnText: OneColumnTextComponent,
};
