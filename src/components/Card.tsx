import React from 'react'
import { Box } from '@chakra-ui/core'

export const Card = (props) => {
  if (props.img) {
    return (
      <Box boxShadow="lg" borderRadius={10}>
        <React.Fragment>
          <img src={props.img}></img>
          <Box p={5}>{props.children}</Box>
        </React.Fragment>
      </Box>
    )
  } else {
    return (
      <Box p={5} boxShadow="lg" borderRadius={10}>
        {props.children}
      </Box>
    )
  }
}
