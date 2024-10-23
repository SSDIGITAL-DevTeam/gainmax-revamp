export type NavLink = {
  name: string;
  path?: string;
  menus?: {
    name: string;
    path: string;
  }[];
};

export const navLinks: NavLink[] = [
  {
    name: 'gainmax group',
    path: '/',
    menus: [
      {
        name: 'introduction',
        path: '/gainmax-group/introduction',
      },
      {
        name: 'vision & mission',
        path: '/gainmax-group/vision-mission',
      },
      {
        name: 'group of companies',
        path: '/gainmax-group/group-of-companies',
      },
      {
        name: 'key milestones',
        path: '/gainmax-group/key-milestones',
      },
      {
        name: 'award & certifications',
        path: '/gainmax-group/award-certifications',
      },
      {
        name: 'careers',
        path: '/gainmax-group/careers',
      },
    ],
  },
  {
    name: 'gainmax c&e',
    path: '/gainmax-cne',
    menus: [
      {
        name: 'introduction',
        path: '/gainmax-cne/introduction',
      },
      {
        name: 'planing & project management',
        path: '/gainmax-cne/planing-project-management',
      },
      {
        name: 'our services',
        path: '/gainmax-cne/our-services',
      },
      {
        name: 'portfolio',
        path: '/gainmax-cne/portfolio',
      },
    ],
  },
  {
    name: 'gainmax i&t',
    path: '/gainmax-int',
    menus: [
      {
        name: 'introduction',
        path: '/gainmax-int/introduction',
      },
      {
        name: 'empowering tomorrow',
        path: '/gainmax-int/empowering-tomorrow',
      },
      {
        name: 'products & services',
        path: '/gainmax-int/products-services',
      },
    ],
  },
  {
    name: 'gainmax c&p',
    path: '/gainmax-cnp',
    menus: [
      {
        name: 'introduction',
        path: '/gainmax-cnp/introduction',
      },
      {
        name: 'partner & collaboration',
        path: '/gainmax-cnp/partner-collaboration',
      },
      {
        name: 'value proposition',
        path: '/gainmax-cnp/value-proposition',
      },
    ],
  },
  {
    name: 'media',
    path: '/media',
  },
  {
    name: 'contact us',
    path: '/contact',
  },
];
