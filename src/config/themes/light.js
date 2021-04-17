import { createMuiTheme } from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";

const lightTheme = createMuiTheme({
  palette: {
    breakpoints: {
      keys: ["xs", "sm", "md", "lg", "xl"],
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    common: {
      black: "#000000",
      white: "#ffffff",
      dark: "#eeeeee",
      light: "#111111",
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif"',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontWeight: 300,
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
      "@media (max-width:960px)": {
        fontSize: "2rem",
      },
    },
  },
});

export default lightTheme;
