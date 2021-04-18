import { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

//themes
import lightTheme from "./config/themes/light";
import darkTheme from "./config/themes/dark";
import About from "./components/About";
import { makeStyles } from "@material-ui/core";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(true);
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <div
        className={classes.app}
        style={{
          backgroundColor: theme
            ? darkTheme.palette.common.dark
            : lightTheme.palette.common.dark,
        }}
      >
        <Router>
          <Header theme={theme} setTheme={setTheme} />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Hero />
              <Projects />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
const useStyles = makeStyles((theme) => ({
  app: {
    minHeight: "100vh",
  },
}));
