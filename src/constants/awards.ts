export interface IAward {
  name: string
  award: string
  year: string
  img?: string
}

export const awards: IAward[] = [
  {
    name: 'International Olympaid in Informatics (IOI)',
    year: '2019',
    award: 'Bronze Medal',
    // img: '/ioi.jpg',
  },
  {
    name: 'Asia-Pacific Informatics Olympiad (APIO)',
    year: '2019',
    award: 'Silver Medal',
    // img: '/apio.jpg',
  },
  {
    name: 'Singapore - National Olympaid in Informatics (NOI)',
    year: '2019',
    award: 'Gold Medal',
    // img: '/noi.jpg',
  },
  {
    name: 'Thailand Olympaid in Informatics (TOI)',
    year: '2017',
    award: 'Silver Medal',
  },
  { name: 'TechJam Grand Final', year: '2018', award: '1st Runner Up' },
  // { name: 'SIT CODE Challenge', year: '2017', award: '1st Runner Up' },
  { name: 'Agoda Programming Competition', year: '2019', award: '5th Place' },
]
