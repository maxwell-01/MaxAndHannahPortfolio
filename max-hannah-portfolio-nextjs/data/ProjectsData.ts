export type ProjectDto = {
  id: number;
  title: string;
  slug?: string;
  thumbnail: string;
  featuredImage?: string;
  people?: string;
  description: string;
};

export type ProjectsDto = {
  projects: Array<ProjectDto>;
};

export const ProjectsData: ProjectsDto = {
  projects: [
    {
      id: 1,
      title: "first title",
      description:
        "The Project  - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n",
      thumbnail: "/images/projects.jpg",
    },
    {
      id: 2,
      title: "second title",
      description:
        "The Project  - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n",
      thumbnail: "/images/projects.jpg",
    },
    {
      id: 3,
      title: "third title",
      description:
        "The Project  - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n",
      thumbnail: "/images/projects.jpg",
    },
    {
      id: 4,
      title: "fourth title",
      description:
        "The Project  - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n",
      thumbnail: "/images/projects.jpg",
    },
    {
      id: 5,
      title: "fifth title",
      description:
        "The Project  - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n",
      thumbnail: "/images/projects.jpg",
    },
    {
      id: 6,
      title: "sixth title",
      description:
        "The Project  - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n",
      thumbnail: "/images/projects.jpg",
    },
    {
      id: 7,
      title: "seventh title",
      description:
        "The Project  - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n",
      thumbnail: "/images/projects.jpg",
    },
    {
      id: 8,
      title: "eight title",
      description:
        "The Project  - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n",
      thumbnail: "/images/projects.jpg",
    },
    {
      id: 9,
      title: "ninth title",
      description:
        "The Project  - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n",
      thumbnail: "/images/projects.jpg",
    },
    {
      id: 10,
      title: "tenth title",
      description:
        "The Project  - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n",
      thumbnail: "/images/projects.jpg",
    },
    {
      id: 11,
      title: "eleventh title",
      description:
        "The Project  - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n",
      thumbnail: "/images/projects.jpg",
    },
  ],
};
