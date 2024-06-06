import { extendTheme } from 'native-base'

export const Temas = extendTheme({
  colors: {
    gray: {
      300: '#8D8D99'
    },
    blue: {
      500: '#339CFF',
      800: '#0B3B60'
    },
    brown: {
      500: '#754127',
      400: '#ab5327'
    },
    white: '#fff',
    black: '#000'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24
  }
})