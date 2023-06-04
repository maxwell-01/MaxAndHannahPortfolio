import { ComponentType } from 'react';
import OneColumnTextComponent from './components/Sections/OneColumnTextComponent';
import FullWidthMediaComponent from './components/Sections/FullWidthMediaComponent';

type componentMap = {
  [key: string]: ComponentType<any>;
};

export const ComponentByContentfulContentTypeId: componentMap = {
  oneColumnText: OneColumnTextComponent,
  fullWidthMedia: FullWidthMediaComponent,
};
