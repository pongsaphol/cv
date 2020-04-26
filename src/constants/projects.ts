export interface ILink {
  name: string
  href: string
}
export interface IProjects {
  name: string
  link: ILink[]
  desc: string
  highlight?: string
}

export const projects: IProjects[] = [
  {
    name: 'programming.in.th',
    link: [
      {
        name: 'Github',
        href: 'https://github.com/programming-in-th/programming.in.th',
      },
      {
        name: 'Website',
        href: 'https://beta.programming.in.th/',
      },
    ],
    desc:
      'The frontend of programming.in.th website, which uses chakra-ui and next-js',
  },
  {
    name: 'api',
    link: [
      {
        name: 'Github',
        href: 'https://github.com/programming-in-th/api',
      },
    ],
    desc:
      'The backend of programming.in.th website, which uses firebase cloud functions',
  },
  {
    name: 'grader',
    link: [
      {
        name: 'Github',
        href: 'https://github.com/programming-in-th/grader',
      },
    ],
    desc: 'The grader of programming.in.th website, which uses Golang',
  },
  {
    name: 'solutions',
    link: [
      {
        name: 'Github',
        href: 'https://github.com/programming-in-th/solutions',
      },
    ],
    desc: 'Coding solutions to Thai competitive programming problems',
  },
  {
    name: 'cv',
    link: [
      {
        name: 'Github',
        href: 'https://github.com/win11905/cv',
      },
    ],
    desc: 'A curriculum vitae of me, built with next-js',
    // highlight: 'THIS SITE',
  },
  {
    name: 'submission',
    link: [
      {
        name: 'Github',
        href: 'https://github.com/win11905/submission',
      },
    ],
    desc: 'My competitive programming solution codes',
  },
  {
    name: 'problem-template',
    link: [
      {
        name: 'Github',
        href: 'https://github.com/win11905/problem-template',
      },
    ],
    desc: 'A template for problem designing for competitive programming',
  },
]
