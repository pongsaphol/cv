import React from 'react'
import { Title } from './Title'
import { Organizer } from './Organizer'
import { Research } from './Research'
import { Projects } from './Projects'
import { TA } from './TA'

export const Activity = () => {
  return (
    <React.Fragment>
      <Title title="Activities" size="xl" />
      <Research />
      <Projects />
      <Organizer />
      <TA />
    </React.Fragment>
  )
}
