import React from 'react';
import { useParams } from 'react-router-dom';

export const Project = () => {
  const { projectId } = useParams();
  return <div>Placeholder for project "{projectId}" project page.</div>;
};
