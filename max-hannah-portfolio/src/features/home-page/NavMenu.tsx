import React from 'react';
import styled from 'styled-components';
import { boldFont, header3 } from '../../styling/fonts';

export const NavMenu = () => {
  return (
    <>
      <NavMenuBar>
        <NavMenuItem>work with us</NavMenuItem>
        <NavMenuItem>Hannah</NavMenuItem>
        <NavMenuItem>Max</NavMenuItem>
      </NavMenuBar>
    </>
  );
};

const NavMenuBar = styled.div`
  padding: 42px 56px 0 0;
  display: flex;
  justify-content: flex-end;
`;

const NavMenuItem = styled.div`
  text-transform: uppercase;
  padding: 0 20px;
  font-size: ${header3};
  font-weight: ${boldFont};
  cursor: pointer;
  &:hover {
    color: #d9d9d9;
  }
`;
