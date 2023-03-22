import React from 'react';
import styled from 'styled-components';
import { boldFont, headingFont, header1, header3 } from '../../styling/fonts';
import { ProjectCardLeftImage } from './ProjectCard/ProjectCardLeftImage';
import { ProjectsData } from '../../data/ProjectsData';
import { ProjectCardRightImage } from './ProjectCard/ProjectCardRightImage';
import { ArchiveStrip } from './ArchiveStrip';

export const Home = () => {
  const projectsInProjectSection = ProjectsData.projects.slice(0, 4);
  const projectsForArchiveSection = ProjectsData.projects.slice(5, 11);

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
          {projectsInProjectSection.map((project, index) =>
            index % 2 === 0 ? (
              <ProjectCardLeftImage project={project} />
            ) : (
              <ProjectCardRightImage project={project} />
            ),
          )}
        </ProjectsSection>
        <ArchiveStrip archiveProjects={projectsForArchiveSection} />
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
  padding: 0 100px;
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
  display: flex;
  flex-direction: column;
  gap: 138px;
  padding-bottom: 138px;
`;
