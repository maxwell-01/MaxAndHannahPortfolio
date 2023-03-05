import React from 'react';
import { useParams } from 'react-router-dom';

export const Project = () => {
  const { projectName } = useParams();
  return <div>Placeholder for "{projectName}" project page.</div>;
};
