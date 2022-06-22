import React from 'react'
import {Box, Text,} from '@chakra-ui/react';

function Display() {
  return (
    <div>
      <Box
        position="absolute"
        bg="black"
        opacity="0.9"
        h="64.7%"
        w="100%"
        zIndex="1"
        right="0"
        left="0"
      ></Box>
      <Box bg="blackAlpha.200" w="100%" h="20%" p={4} color="white">
        <Box
          as="video"
          autoPlay
          muted
          loop
          width="100%"
          position="relative"
          //h="10%"
          //right="0"
          //top="0"
          //left="0"
          //bottom="0"
          src="https://i.imgur.com/8xTLLL3.mp4"
        />
      </Box>
      
    </div>
  );
}

export default Display