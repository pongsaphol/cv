export interface IEducations {
  name: string
  year: string
  img: string
  desc: string
}

export const educations: IEducations[] = [
  {
    name: 'Triam Udom Suksa School',
    year: '2017-2020',
    img: '/tu.jpg',
    desc:
      'Founded in 1938 as a preparatory school for Chulalongkorn University, Triam Udom Suksa School is a state school in Central Bangkok, Thailand. It admits upper-secondary students (mathayom 4–6, equivalent to grades 10–12) and has the largest yearly enrollment in the country.',
  },
  {
    name: 'Assumption Samutprakarn School',
    year: '2008-2017',
    img: '/acsp.jpg',
    desc:
      'Assumption Samutprakarn Schhol is a private Catholic school in Samut Prakarn, Thailand. Founded and run by the Brothers of St. Gabriel since 1979 as the thirteenth educational institution of the congregation, the school provides education to students from grades 1 to 12.',
  },
]
