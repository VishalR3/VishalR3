import { createMuiTheme } from "@material-ui/core";

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
      main: "#f1f1f1",
      grey: "#e9ecec",
      lightGrey: "#1a1919",
    },
    secondary: {
      main: "#f50057",
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
    h3: {
      fontWeight: 600,
      fontSize: "3rem",
      lineHeight: 1.5,
      letterSpacing: "-0.00833em",
      "@media (max-width:960px)": {
        fontSize: "2rem",
      },
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
      "@media (max-width:960px)": {
        fontSize: "1rem",
      },
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 2,
      letterSpacing: "0.00938em",
    },
    subtitle1: {
      fontWeight: 300,
      fontSize: "0.75rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
  },
});

export default lightTheme;
