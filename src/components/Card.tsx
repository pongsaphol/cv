import React from 'react'
import { Box, PseudoBox } from '@chakra-ui/core'

const boxConfig = {
  boxShadow: 'md',
  rounded: 'lg',
  _hover: { boxShadow: 'xl' },
  transition: '0.2s',
}

export const Card = (props) => {
  return (
    <React.Fragment>
      {props.img ? (
        <PseudoBox {...boxConfig}>
          <picture>
            <source type="image/webp" srcSet={`/${props.img}.webp`} />
            <source type="image/jpeg" srcSet={`/${props.img}.jpg`} />
            <img src={`/${props.img}.jpg`} alt="" />
          </picture>
          <Box p={5}>{props.children}</Box>
        </PseudoBox>
      ) : (
        <PseudoBox p={5} {...boxConfig}>
          {props.children}
        </PseudoBox>
      )}
    </React.Fragment>
  )
}
