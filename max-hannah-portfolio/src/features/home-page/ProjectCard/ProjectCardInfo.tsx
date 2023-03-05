import React from 'react';
import styled from 'styled-components';
import { PortfolioButton } from '../../../shared/PortfolioButton';
import {
  bodyFont,
  boldFont,
  fontBase,
  header2,
  headingFont,
  regularFontWeight,
} from '../../../styling/fonts';

type Props = {
  title: string;
  description: string;
};
export const ProjectCardInfo = ({ title, description }: Props) => {
  return (
    <ProjectCardInfoContainer>
      <ProjectCardTitle>{title}</ProjectCardTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <PortfolioButton buttonText={'see more'} />
    </ProjectCardInfoContainer>
  );
};

const ProjectCardInfoContainer = styled.div`
  padding: 25px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const ProjectCardTitle = styled.h2`
  font: ${headingFont};
  font-size: ${header2};
  font-weight: ${boldFont};
  line-height: 65px;
  text-transform: uppercase;
`;

const ProjectDescription = styled.div`
  font: ${bodyFont}
  font-size: ${fontBase};
  font-weight: ${regularFontWeight};
  line-height: 35px;
`;
