export type ProjectDto = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

export type ProjectsDto = {
  projects: Array<ProjectDto>;
};

export const ProjectsData: ProjectsDto = {
  projects: [
    {
      id: 1,
      title: 'first title',
      description:
        "The Project  - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n",
      imageUrl: '/images/projects.jpg',
    },
    {
      id: 2,
      title: 'second title',
      description:
        "The Project  - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n",
      imageUrl: '/images/projects.jpg',
    },
    {
      id: 3,
      title: 'third title',
      description:
        "The Project  - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n",
      imageUrl: '/images/projects.jpg',
    },
    {
      id: 4,
      title: 'fourth title',
      description:
        "The Project  - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n",
      imageUrl: '/images/projects.jpg',
    },
  ],
};
