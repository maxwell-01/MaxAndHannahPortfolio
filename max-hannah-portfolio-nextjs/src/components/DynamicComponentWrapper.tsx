import { ComponentByContentfulContentTypeId } from '../ComponentByContentfulContentTypeId';
import React from 'react';
import { PortfolioFields, PortfolioSection } from '../types/PortfolioTypes';

type DynamicComponentWrapperProps = {
  contentType: string;
  section: PortfolioSection<PortfolioFields>;
};
const DynamicComponentWrapper = ({
  contentType,
  section,
}: DynamicComponentWrapperProps) => {
  return React.createElement(ComponentByContentfulContentTypeId[contentType], {
    section,
  });
};

export default DynamicComponentWrapper;
