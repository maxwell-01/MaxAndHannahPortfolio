import {ComponentType} from "react";
import OneColumnTextComponent from "./components/ContentfulSections/OneColumnTextComponent";
import FullWidthMediaComponent from "./components/ContentfulSections/FullWidthMediaComponent";


type componentMap = {
    [key: string]: ComponentType<any>;
};

export const ComponentByContentfulContentTypeId: componentMap = {
    oneColumnText: OneColumnTextComponent,
    fullWidthMedia: FullWidthMediaComponent,
};
