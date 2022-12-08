//import { ChakraProvider } from "@chakra-ui/react";
import React, { useState } from 'react'

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
} from '@chakra-ui/icons'
import { Box, Flex, Spacer } from '@chakra-ui/layout'
import { Grid, GridItem } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { format, startOfToday } from 'date-fns'

const Months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const Days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const range = (end) => {
  const { result } = Array.from({ length: end }).reduce(
    ({ result, current }) => ({
      result: [...result, current],
      current: current + 1,
    }),
    { result: [], current: 1 }
  )
  return result
}

export const MonthlyView = () => {
  let today = startOfToday()

  return (
    <Box w="100%" h="100%">
      <Flex bg="#B83280" w="100%" p={15}>
        <Spacer />
        <IconButton
          border="none"
          bg="none"
          color="white"
          aria-label="Double Left Arrow"
          icon={<ArrowLeftIcon />}
        />

        <Spacer />

        <IconButton
          border="none"
          bg="none"
          color="white"
          ria-label="Left Arrow"
          icon={<ChevronLeftIcon />}
        />

        <Spacer />
        <Box color="White">{format(today, 'MMMM yyyy')}</Box>
        <Spacer />

        <IconButton
          border="none"
          bg="none"
          color="white"
          aria-label="Left Arrow"
          icon={<ChevronRightIcon />}
        />

        <Spacer />

        <IconButton
          border="none"
          bg="none"
          color="white"
          aria-label="Double Right Arrow"
          icon={<ArrowRightIcon />}
        />

        <Spacer />
        <IconButton
          border="none"
          bg="none"
          color="white"
          aria-label="Search database"
          icon={<SearchIcon />}
        />
      </Flex>
      <Grid justify="align-center" templateColumns="repeat(7, 1fr)" p="10">
        {Days.map((day) => (
          <GridItem rowSpan={3} gap={10} align="center">
            {day}
          </GridItem>
        ))}
      </Grid>
      <Grid rowSpan={3} gap={0.8} templateColumns="repeat(7, 1fr)" p="10">
        {range(31).map((day) => (
          <GridItem w="100%" h="85px">
            {day}
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}

export default MonthlyView
