export interface ILink {
  name: string
  href: string
}
export interface IProjects {
  name: string
  link: ILink[]
  desc: string
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
]
