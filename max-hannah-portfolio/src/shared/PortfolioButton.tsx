import React from 'react';
import styled from 'styled-components';
import { portfolioBlack, portfolioWhite } from '../styling/colours';
import { header3 } from '../styling/fonts';

type Props = {
  buttonText: string;
  url?: string;
};
export const PortfolioButton = ({ buttonText, url }: Props) => {
  return <PortfolioButtonContainer>{buttonText}</PortfolioButtonContainer>;
};

const PortfolioButtonContainer = styled.button`
  align-self: flex-start;
  padding: 20px;
  background-color: ${portfolioBlack};
  text-transform: uppercase;
  font-size: ${header3};
  color: ${portfolioWhite};
  line-height: 42px;
  cursor: pointer;
`;
