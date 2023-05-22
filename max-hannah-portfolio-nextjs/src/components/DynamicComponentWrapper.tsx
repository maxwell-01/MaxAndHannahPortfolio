import {Entry} from "contentful";
import {ContentfulFields} from "../types/ContentfulTypes";
import {ComponentByContentfulContentTypeId} from "../ComponentByContentfulContentTypeId";
import React from "react";


type DynamicComponentWrapperProps = {
    contentType: string;
    entry: Entry<ContentfulFields>;
};
const DynamicComponentWrapper = ({
    contentType,
    entry,
}: DynamicComponentWrapperProps) => {
    return React.createElement(
        ComponentByContentfulContentTypeId[contentType],
        {
            entry,
        }
    );
};

export default DynamicComponentWrapper;
