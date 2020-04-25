export interface IOrganizer {
  name: string
  desc: string
  year: string
  img?: string
}

export const organizer: IOrganizer[] = [
  // {
  //   name: 'TOI',
  //   desc:
  //     'National IOI selection contest attended by over 90 contestants in Thailand',
  //   year: '2020',
  // },
  {
    name: 'PreTOI',
    desc: 'The most attended simulation of Thailand Olympiad in Informatics',
    year: '2018-2020',
    // img: '/pretoi.png',
  },
  {
    name: 'TUMSO',
    desc:
      'Annual intramural competition attended by students across the nation',
    year: '2018-2020',
    // img: '/tumso.png',
  },
  {
    name: 'ICPC Asia Bangkok',
    desc: 'college-level contest attended by over 50 teams in Southeast Asia',
    year: '2019',
    // img: '/icpc.png',
  },
  {
    name: 'ICPC Asia Bangkok Preliminary',
    desc: 'college-level contest attended by over 100 teams in Thailand',
    year: '2019',
    // img: '/icpcp.png',
  },
]
