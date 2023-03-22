import React from 'react';
import styled from 'styled-components';
import { boldFont, header2, headingFont } from '../../styling/fonts';
import { ProjectDto } from '../../data/ProjectsData';
import { Link } from 'react-router-dom';

type Props = {
  archiveProjects: Array<ProjectDto>;
};
export const ArchiveStrip = ({ archiveProjects }: Props) => {
  return (
    <ArchiveContainer>
      <ArchiveHeader>Archive</ArchiveHeader>
      <ArchiveElements>
        {archiveProjects.map((project, index) => (
          <Link to={'/projects/' + project.id}>
            <ArchiveImage src={project.imageUrl} alt={'Project image for ' + project.title} />
          </Link>
        ))}
      </ArchiveElements>
    </ArchiveContainer>
  );
};

const ArchiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArchiveHeader = styled.h2`
  width: 100%;
  padding: 0 0 30px 50px;
  font: ${headingFont};
  font-size: ${header2};
  font-weight: ${boldFont};
  line-height: 65px;
  text-transform: uppercase;
`;

const ArchiveElements = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ArchiveImage = styled.img`
  width: 416px;
  height: 294px;
`;
