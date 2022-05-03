import { extendTheme } from '@chakra-ui/react';
import foundations from './foundations';

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}

const theme = {
  styles: {
    global: {
      svg: {
        display: 'inline'
      },
      image: {
        display: 'inline'
      }
    }
  },
  ...foundations,
  config
}

export default extendTheme(theme);