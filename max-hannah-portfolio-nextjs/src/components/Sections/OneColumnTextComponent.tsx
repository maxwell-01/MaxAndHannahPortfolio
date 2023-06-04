import 'app/globals.css';
import React from 'react';
import {
  OneColumnTextFields,
  PortfolioSection,
} from '../../types/PortfolioTypes';

type Props = {
  section: PortfolioSection<OneColumnTextFields>;
};

const OneColumnTextComponent = ({ section }: Props) => {
  return (
    <>
      <h2 className={'font-heading'}>{section.fields.title}</h2>
      {section.fields.richTextHtml.map((html, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: html }} />
      ))}
      <ul className={'list-disc'}>
        <li>one</li>
        <li>two</li>
      </ul>
    </>
  );
};

export default OneColumnTextComponent;
