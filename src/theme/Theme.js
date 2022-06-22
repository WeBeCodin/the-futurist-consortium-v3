import { extendTheme, theme as base } from "@chakra-ui/react";

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,

  
};

const theme = extendTheme({
  config,
  colors: {
    neolime: '#E8FFC2',
    brightturq: '#00FFDD',
    lightyel: '#FFC600',
    sykpurp: '#E900FF',
    deepink: '#FF008E',
    electrind: '#5800FF',
    sop: '#D22779',
    daibush: '#612897',
    mystblu: '#0C1E7F',
    black: '#000000',
  },

  fonts: {
    heading: `Exo, ${base.fonts?.heading}`,
    body: `Exo, ${base.fonts?.body}`,
  },
});

export default theme;