import React from 'react'
import Link from 'next/link'
import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { IContact, contact } from '../constants/contact'
import { Title } from './Title'

export const Contact = () => {
  return (
    <React.Fragment>
      <Title title="Pongsaphol Pongsawakul" />
      <Box mx="auto" width={[21 / 24, 21 / 24, 20 / 24, 20 / 24]} mt={6}>
        <Flex direction="row">
          {contact.map((cont: IContact) => (
            <Box pr={[5, 10]}>
              <a href={cont.href} target="_blank">
                <Box as={cont.icon} size={6} />
              </a>
            </Box>
          ))}
        </Flex>
      </Box>
    </React.Fragment>
  )
}
