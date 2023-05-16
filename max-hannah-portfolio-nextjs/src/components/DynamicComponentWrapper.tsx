import React from 'react';
import { ComponentByContentfulContentTypeId } from '@/src/ComponentByContentfulContentTypeId';
import { Entry } from 'contentful';
import { ContentfulFields } from '@/src/types/ContentfulTypes';

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
