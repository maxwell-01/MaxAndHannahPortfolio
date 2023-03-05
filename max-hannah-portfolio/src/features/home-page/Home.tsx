import React from 'react';
import styled from 'styled-components';
import { boldFont, headingFont, header1, header3 } from '../../styling/fonts';
import { ProjectCardLeftImage } from './ProjectCard/ProjectCardLeftImage';
import { ProjectsData } from '../../data/ProjectsData';
import { ProjectCardRightImage } from './ProjectCard/ProjectCardRightImage';

export const Home = () => {
  return (
    <>
      <Header>
        <HeaderSpan>Building software with</HeaderSpan>
        <HeaderSpan>impactful designs</HeaderSpan>
      </Header>
      <Body>
        <FilterContainer>
          <FilterHeading>Filter by:</FilterHeading>
          <FilterItem>Hannah</FilterItem>
          <FilterItem>Max</FilterItem>
          <FilterItem>Combo</FilterItem>
        </FilterContainer>
        <ProjectsSection>
          {ProjectsData.projects.map((project, index) =>
            index % 2 === 0 ? (
              <ProjectCardLeftImage project={project} />
            ) : (
              <ProjectCardRightImage project={project} />
            ),
          )}
        </ProjectsSection>
      </Body>
    </>
  );
};

const Header = styled.div`
  padding: 150px 100px 150px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const HeaderSpan = styled.span`
  display: block;
  font-size: ${header1};
  font-weight: ${boldFont};
  font-family: ${headingFont};
  line-height: 180px;
`;

const Body = styled.body`
  padding: 0 42px;
  font-size: ${header3};
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0 50px 0;
`;

const FilterHeading = styled.div`
  padding: 0 40px;
  text-transform: uppercase;
  font-size: ${header3};
  font-weight: ${boldFont};
`;

const FilterItem = styled.div`
  padding: 0 40px;
  text-transform: uppercase;
  font-size: ${header3};
  font-weight: ${boldFont};
  cursor: pointer;
  &:hover {
    color: #d9d9d9;
  }
`;

const ProjectsSection = styled.section`
  padding: 0 98px;
  display: flex;
  flex-direction: column;
  gap: 138px;
`;
