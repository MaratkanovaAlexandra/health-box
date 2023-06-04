import { colors } from './colors'

export const theme = {
  palette: {
    primary: {
      main: colors.purple,
    },
    background: {
      paper: colors.white,
      default: colors.tilted_purple,
    },
    divider: colors.light_gray,
    success: {
      main: colors.green,
    },
    error: {
      main: colors.red,
    },

    secondary: {
      main: colors.blue,
    },
    text: {
      primary: colors.black,
      secondary: colors.dark_gray,
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h3: {
      fontWeight: 500,
      lineHeight: '23px',
      fontSize: '20px',
    },
    button: {
      fontWeight: 400,

      fontSize: '14px',
      lineHeight: '16px',
    },
  },
}
