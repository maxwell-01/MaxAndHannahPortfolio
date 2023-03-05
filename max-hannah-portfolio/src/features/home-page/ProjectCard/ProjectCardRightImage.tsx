import React from 'react';
import { ProjectDto } from '../../../data/ProjectsData';
import styled from 'styled-components';
import { ProjectCardInfo } from './ProjectCardInfo';

type Props = {
  project: ProjectDto;
};
export const ProjectCardRightImage = ({ project }: Props) => {
  return (
    <ProjectCardContainer>
      <div>
        <ProjectCardInfo title={project.title} description={project.description} />
      </div>
      <div>
        <Image src={project.imageUrl} alt={'Cover image for ' + project.title} />
      </div>
    </ProjectCardContainer>
  );
};

const ProjectCardContainer = styled.div`
  display: flex;
  gap: 135px;
  padding-left: 50px;
`;

const Image = styled.img`
  width: 508px;
  height: 533px;
`;
