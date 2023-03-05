import React from "react";
import styled from "styled-components";


export const NavMenu = () => {
    return (
        <>
            <NavMenuBar>
                <NavMenuItem>
                    test 1
                </NavMenuItem>
                <NavMenuItem>
                    test 2
                </NavMenuItem>
            </NavMenuBar>
        </>
    );
}

const NavMenuBar = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NavMenuItem = styled.div`
  &:hover {
    color: #D9D9D9
  }
`;