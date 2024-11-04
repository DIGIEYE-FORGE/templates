type TRoute = {
  name: string;
  description?: string;
  href?: string;
  subRoutes?: {
    name: string;
    description?: string;
    href: string;
    image: string;
  }[];
};

export const routes: TRoute[] = [
  {
    name: "route 1",
    subRoutes: [
      {
        name: "sub route 1",
        description: "sub route 1 description",
        href: "/subroute1",
        image: "/images/placeholder.svg",
      },
      {
        name: "sub route 2",
        description: "sub route 2 description",
        href: "/subroute2",
        image: "/images/placeholder.svg",
      },
      {
        name: "sub route 3",
        description: "sub route 3 description",
        href: "/subroute3",
        image: "/images/placeholder.svg",
      },
    ],
  },
  {
    name: "route 2",
    subRoutes: [
      {
        name: "sub route 4",
        href: "/subroute4",
        description: "sub route 2 description",
        image: "/images/placeholder.svg",
      },
      {
        name: "sub route 5",
        href: "/subroute5",
        description: "sub route 2 description",
        image: "/images/placeholder.svg",
      },
      {
        name: "sub route 6",
        href: "/subroute6",
        description: "sub route 2 description",
        image: "/images/placeholder.svg",
      },
    ],
  },
  {
    name: "route 3",
    subRoutes: [
      {
        name: "sub route 7",
        href: "/subroute7",
        description: "sub route 2 description",
        image: "/images/placeholder.svg",
      },
      {
        name: "sub route 8",
        href: "/subroute8",
        description: "sub route 2 description",
        image: "/images/placeholder.svg",
      },
    ],
  },
  {
    name: "route 4",
    subRoutes: [
      {
        name: "sub route 9",
        href: "/subroute9",
        description: "sub route 2 description",
        image: "/images/placeholder.svg",
      },
      {
        name: "sub route 10",
        href: "/subroute10",
        description: "sub route 2 description",
        image: "/images/placeholder.svg",
      },
    ],
  },
  {
    name: "route 5",
    href: "/route5",
  },
  {
    name: "route 6",
    href: "/route6",
  },
  {
    name: "route 7",
    href: "/route7",
  },
];
