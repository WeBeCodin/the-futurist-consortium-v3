import React from 'react'
import {
  Box,
  Text,
  Image,
  Badge,
  Grid,
  GridItem,
  Container,
  chakra,
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and the children prop to be forwarded.
   * All other chakra props not matching the motion props will still be forwarded.
   */
  shouldForwardProp: prop => isValidMotionProp(prop) || prop === 'children',
});

function About() {

  return (
    <div>
      <Box
        position="relative"
        bg="whiteAlpha.200"
        opacity="0.9"
        h="57%"
        w="100%"
        //zIndex="1"
        right="0"
        left="0"
      ></Box>
      <Box bg="blackAlpha.200" w="100%" h="75vh" p={4} color="white">
        <Grid
          h="200px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={4}
          color="black"
          fontSize="lg"
        >
          <ChakraBox
            transition={{
              type: 'spring',
              stifness: '100',
              duration: 0.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            animate={{
              x: ['0%', '0.5%'],
              y: ['0%', '0.5%'],
            }}
          >
            <GridItem
              colSpan={2}
              //bg="white"
              boxSizing="border-box"
              transition="all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s"
               _hover={{
              transform: 'scale(1.05)',
              border: '3px solid rgba(549, 549, 549, 0.08)',
              boxShadow: 'rgb(0 255 221 / 69%) 0px 20px 25px -20px',
            }}
              w="50vw"
              h="30vh"
              bg="white"
              borderRadius="10px"
              overflow="hidden"
              border="3px solid rgba(549, 549, 549, 0.1)"
              boxShadow="rgb(0 0 0 / 69%) 0px 26px 30px -10px,
          rgb(0 0 0 / 73%) 0px 16px 10px -10px"
            >
              <Box>
                <Text
                  fontSize="2xl"
                  fontWeight="extrabold"
                  ml="2"
                  textAlign="center"
                >
                  WE ARE NOT MODERN
                </Text>
                <Text
                  fontSize="md"
                  fontWeight="thin"
                  ml="2"
                  mt="2"
                  textAlign="center"
                >
                  We create future proof designs, <br></br>
                  with our finger on the pulse of cutting edge techniques.
                  <br />
                  <br />
                  The Futurist Consortium moves seamlessly through time <br />
                  with a focus on creativity by design.
                </Text>
              </Box>
            </GridItem>
          </ChakraBox>
          <ChakraBox
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            animate={{
              x: ['0%', '0.5%'],
              y: ['0%', '0.5%'],
            }}
          >
            <GridItem
              rowSpan={2}
              //bg="tomato"
              boxSizing="border-box"
              transition="all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s"
              _hover={{
                transform: 'scale(1.05)',
                border: '3px solid rgba(549, 549, 549, 0.08)',
                boxShadow: 'rgb(0 255 221 / 69%) 0px 20px 25px -20px',
              }}
              w="45vw"
              h="62vh"
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
                objectFit="cover"
                autoPlay
                muted
                loop
                src="https://imgur.com/FuIGFp4.mp4"
              />
            </GridItem>
          </ChakraBox>
          <ChakraBox
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            animate={{
              x: ['0%', '0.5%'],
              y: ['0%', '0.5%'],
            }}
          >
            <GridItem
              colSpan={2}
              bg="white"
              boxSizing="border-box"
              transition="all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s"
              _hover={{
                transform: 'scale(1.05)',
                border: '3px solid rgba(549, 549, 549, 0.08)',
                boxShadow: 'rgb(0 255 221 / 69%) 0px 20px 25px -20px',
              }}
              w="50vw"
              h="30vh"
              color="black"
              borderRadius="10px"
              overflow="hidden"
              border="3px solid rgba(549, 549, 549, 0.1)"
              boxShadow="rgb(0 0 0 / 69%) 0px 26px 30px -10px,
          rgb(0 0 0 / 73%) 0px 16px 10px -10px"
            >
              <Box position="absolute">
                <Badge
                  color="brightturq"
                  bg="mystblu"
                  p="2"
                  m="2"
                  borderRadius="10"
                >
                  About
                </Badge>
                <Text fontSize="3xl" fontWeight="extrabold" ml="2">
                  We Are The Future
                </Text>
                <Text fontSize="md" fontWeight="thin" ml="2" mt="2">
                  The Futurist Consortium is a group of digital masterminds with
                  over 25 years of experience. <br />
                  We are a powerful team of individuals that go above and beyond
                  to develop custom tailored solutions <br />
                  to your problems.
                  <br />
                  <br />
                  We listen, conceptualize, present and refine... <br />
                  Until you are satisfied with the result.
                </Text>
              </Box>
            </GridItem>
          </ChakraBox>
        </Grid>
      </Box>
    </div>
  );
}

export default About