import React from 'react';
import Header from './components/Header';
import "./theme/Styles.css";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  useColorMode,
} from '@chakra-ui/react';
import theme from './theme/Theme';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Display from './components/Display';
import About from './components/About';
import LowerNav from './components/LowerNav';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Display />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <LowerNav />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
