import { createTheme } from "@mui/material/styles";

const colors = {
  black: "#000000",
  white: "#ffffff",
  purple: "#7166F9",
  blue: "#4CD7F6",
  pink: "#E17CFD",
  tilted_purple: "#F6F6FB",
  dark_gray: "#2B2F42",
  middle_gray: "#928484",
  gray: "#575353",
  light_gray: "#C4C4C4",
}

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.purple,
    },
    background: {
      paper: colors.white,
      default: colors.tilted_purple,
    },
    // secondary: {
    //   main: colors.blue
    // }, 
    custom: {
      blue: colors.blue,
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
    }
  }
})