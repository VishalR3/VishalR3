import { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { makeStyles } from "@material-ui/core";

//Pages
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";

//themes
import lightTheme from "./config/themes/light";
import darkTheme from "./config/themes/dark";
import NotFound from "./pages/NotFound";

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
              <Home />
            </Route>
            <Route path="/project/:name">
              <Project />
            </Route>
            <Route path="*">
              <NotFound />
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
