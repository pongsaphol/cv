export interface IResearch {
  name: string
  href: string
  desc: string
}

export const research: IResearch[] = [
  {
    name: 'An Algorithm for Consensus Trees',
    href: 'https://arxiv.org/abs/2003.00488',
    desc:
      'We consider the tree consensus problem, an important problem in bioinformatics. Given a rooted tree t and another tree T, one would like to incorporate compatible information from T to t.',
  },
]
