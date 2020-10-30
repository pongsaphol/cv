export interface IEducations {
  name: string
  year: string
  img: string
  desc: string
}

export const educations: IEducations[] = [
  {
    name: 'Brewster Academy',
    year: '2020-2021',
    img: 'brewster',
    desc:
      'Brewster Academy is a co-educational independent boarding school located on 80 acres (32 ha) in Wolfeboro, New Hampshire, United States. It occupies 0.5 miles (800 m) of shoreline along Lake Winnipesaukee. With around 350 students, it serves grades nine through twelve and post-graduates.'
  },
  {
    name: 'Triam Udom Suksa School',
    year: '2017-2020',
    img: 'tu',
    desc:
      'Founded in 1938 as a preparatory school for Chulalongkorn University, Triam Udom Suksa School is a state school in Central Bangkok, Thailand. It admits upper-secondary students (mathayom 4–6, equivalent to grades 10–12) and has the largest yearly enrollment in the country.',
  },
  {
    name: 'Assumption Samutprakarn School',
    year: '2008-2017',
    img: 'acsp',
    desc:
      'Assumption Samutprakarn Schhol is a private Catholic school in Samut Prakarn, Thailand. Founded and run by the Brothers of St. Gabriel since 1979 as the thirteenth educational institution of the congregation, the school provides education to students from grades 1 to 12.',
  },

]
