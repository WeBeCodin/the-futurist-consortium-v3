import React from 'react'
import { Button, ButtonGroup, Box, Text, Avatar } from '@chakra-ui/react';

function Header() {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        bg="blackAlpha.200"
        w="100%"
        p={4}
        color="white"
      >
        <Box w="full" display="flex" justifyContent="center">
          <Button
            transition="all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s"
            _hover={{
              color: 'white',
              boxShadow: 'rgb(0 255 221 / 69%) 0px 20px 25px -20px',
            }}
            bgGradient="linear(to-l, brightturq -90%, sykpurp)"
            color="brightturq"
            size="lg"
            border="1px solid"
            borderBottomLeftRadius="50px"
            borderRadius="none"
          >
            Welcome
          </Button>
          <Button
            transition="all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s"
            _hover={{
              color: 'white',
              boxShadow: 'rgb(0 255 221 / 69%) 0px 20px 25px -20px',
            }}
            bgGradient="linear(to-l, brightturq -90%, sykpurp)"
            color="brightturq"
            size="lg"
            border="1px solid"
            borderRadius="none"
          >
            About
          </Button>
          <Button
            transition="all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s"
            _hover={{
              color: 'white',
              boxShadow: 'rgb(0 255 221 / 69%) 0px 20px 25px -20px',
            }}
            bgGradient="linear(to-l, brightturq -90%, sykpurp)"
            color="brightturq"
            size="lg"
            border="1px solid"
            borderRadius="none"
          >
            Consortium
          </Button>
          <Button
            transition="all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s"
            _hover={{
              color: 'white',
              boxShadow: 'rgb(0 255 221 / 69%) 0px 20px 25px -20px',
            }}
            bgGradient="linear(to-l, brightturq -90%, sykpurp)"
            color="brightturq"
            size="lg"
            border="1px solid"
            borderRadius="none"
          >
            Portfolio
          </Button>
          <Button
            transition="all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s"
            _hover={{
              color: 'white',
              boxShadow: 'rgb(0 255 221 / 69%) 0px 20px 25px -20px',
            }}
            bgGradient="linear(to-l, brightturq -90%, sykpurp)"
            color="brightturq"
            size="lg"
            border="1px solid"
            borderTopRightRadius="50px"
            borderRadius="none"
          >
            Contact
          </Button>
        </Box>
        <Avatar
          size="lg"
          name="The Futurist Consortium"
          src="https://bit.ly/sage-adebayo"
        />
      </Box>
    </div>
  );
}

export default Header