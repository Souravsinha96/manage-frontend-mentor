import { createMuiTheme } from "@material-ui/core/styles";
const darkBlue = "hsl(228, 39%, 23%)";
const brightRed = "hsl(12, 88%, 59%)";
const lightGrey = "hsl(0, 0%, 98%)";
const paleRed = "hsl(13, 100%, 96%)";
const grayishBlue = "hsl(227, 12%, 61%)";
const veryDarkBlue = "hsl(233, 12%, 13%)";
export default createMuiTheme({
  palette: {
    common: {
      blue: darkBlue,
      red: brightRed,
      dark: veryDarkBlue,
    },
    primary: {
      main: darkBlue,
    },
    secondary: {
      main: brightRed,
    },
  },
  typography: {
    tab: {
      fontFamily: "Be Vietnam",
      fontSize: "14px",
      fontWeight: 700,
      textTransform: "none",
    },
    started: {
      fontFamily: "Be Vietnam",
      fontSize: "14px",
      fontWeight: 500,
      textTransform: "none",
      borderRadius: "50px",
      height: "45px",
    },
    h1: {
      fontFamily: "Be Vietnam",
      fontSize: "64px",
      color: darkBlue,
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Be Vietnam",
      fontSize: "32px",
      color: darkBlue,
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Be Vietnam",
      fontSize: "18px",
      color: darkBlue,
      fontWeight: 700,
    },
    body1: {
      fontFamily: "Be Vietnam",
      fontSize: "18px",
      color: grayishBlue,
      fontWeight: 300,
    },
  },
});
