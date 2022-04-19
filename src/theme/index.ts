import { extendTheme } from '@chakra-ui/react';
import foundations from './foundations';

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}

const theme = {
  ...foundations,
  config
}

export default extendTheme(theme);