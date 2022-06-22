import React from 'react'
import { Box, Text, Grid, GridItem } from '@chakra-ui/react';

function LowerNav() {
  return (
    <div>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} mx="4">
        <GridItem
          boxSizing="border-box"
          transition="all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s"
          _hover={{
            transform: 'scale(1.05)',
            border: '3px solid rgba(549, 549, 549, 0.08)',
            boxShadow: 'rgb(0 255 221 / 69%) 0px 20px 25px -20px',
          }}
          marginBottom="56"
          w="100%"
          h="175"
          bg="blackAlpha.200"
          borderRadius="10px"
          overflow="hidden"
          border="3px solid rgba(549, 549, 549, 0.1)"
          boxShadow="rgb(0 0 0 / 69%) 0px 26px 30px -10px,
          rgb(0 0 0 / 73%) 0px 16px 10px -10px"
        >
          <Box
            h="100%"
            w="100%"
            as="video"
            autoPlay
            muted
            loop
            src="https://imgur.com/FuIGFp4.mp4"
          />
        </GridItem>
        <GridItem
          boxSizing="border-box"
          transition="all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s"
          _hover={{
            transform: 'scale(1.05)',
            border: '3px solid rgba(549, 549, 549, 0.08)',
            boxShadow: 'rgb(0 255 221 / 69%) 0px 20px 25px -20px',
          }}
          marginBottom="56"
          w="100%"
          h="175"
          bg="blackAlpha.200"
          borderRadius="10px"
          overflow="hidden"
          border="3px solid rgba(549, 549, 549, 0.1)"
          boxShadow="rgb(0 0 0 / 69%) 0px 26px 30px -10px,
          rgb(0 0 0 / 73%) 0px 16px 10px -10px"
        >
          <Box
            h="100%"
            w="100%"
            as="video"
            autoPlay
            muted
            loop
            src="https://imgur.com/5ANH7b0.mp4"
          />
        </GridItem>
        <GridItem
          boxSizing="border-box"
          transition="all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s"
          _hover={{
            transform: 'scale(1.05)',
            border: '3px solid rgba(549, 549, 549, 0.08)',
            boxShadow: 'rgb(0 255 221 / 69%) 0px 20px 25px -20px',
          }}
          marginBottom="56"
          w="100%"
          h="175"
          bg="blackAlpha.200"
          borderRadius="10px"
          overflow="hidden"
          border="3px solid rgba(549, 549, 549, 0.1)"
          boxShadow="rgb(0 0 0 / 69%) 0px 26px 30px -10px,
          rgb(0 0 0 / 73%) 0px 16px 10px -10px"
        >
          <Box
            h="100%"
            w="100%"
            as="video"
            autoPlay
            muted
            loop
            src="https://imgur.com/qL05c8Q.mp4"
          />
        </GridItem>
        <GridItem
          boxSizing="border-box"
          transition="all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s"
          _hover={{
            transform: 'scale(1.05)',
            border: '3px solid rgba(549, 549, 549, 0.08)',
            boxShadow: 'rgb(0 255 221 / 69%) 0px 20px 25px -20px',
          }}
          marginBottom="56"
          w="100%"
          h="175"
          bg="blackAlpha.200"
          borderRadius="10px"
          overflow="hidden"
          border="3px solid rgba(549, 549, 549, 0.1)"
          boxShadow="rgb(0 0 0 / 69%) 0px 26px 30px -10px,
          rgb(0 0 0 / 73%) 0px 16px 10px -10px"
        >
          <Box
            h="100%"
            w="100%"
            as="video"
            autoPlay
            muted
            loop
            src="https://imgur.com/IhRWat7.mp4"
          />
        </GridItem>
        <GridItem
          boxSizing="border-box"
          transition="all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s"
          _hover={{
            transform: 'scale(1.05)',
            border: '3px solid rgba(549, 549, 549, 0.08)',
            boxShadow: 'rgb(0 255 221 / 69%) 0px 20px 25px -20px',
          }}
          marginBottom="56"
          w="100%"
          h="175"
          bg="blackAlpha.200"
          borderRadius="10px"
          overflow="hidden"
          border="3px solid rgba(549, 549, 549, 0.1)"
          boxShadow="rgb(0 0 0 / 69%) 0px 26px 30px -10px,
          rgb(0 0 0 / 73%) 0px 16px 10px -10px"
        >
          <Box
            h="100%"
            w="100%"
            as="video"
            autoPlay
            muted
            loop
            src="https://imgur.com/UuwWH44.mp4"
          />
        </GridItem>
      </Grid>
    </div>
  );
}

export default LowerNav