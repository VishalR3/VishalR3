import { useState, Suspense, lazy } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { makeStyles } from "@material-ui/core";
import { HelmetProvider } from "react-helmet-async";
import Loader from "./components/shared/Loader";
import ScrollToTopOnMount from "./components/shared/ScrollToTopOnMount";
import Project from "./pages/Project";
//themes
import lightTheme from "./config/themes/light";
import darkTheme from "./config/themes/dark";

//CSS
import "./assets/css/globals.css";

//Pages
const Home = lazy(() => import("./pages/Home"));
// const Project = lazy(() => import("./pages/Project"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Contact = lazy(() => import("./pages/Contact"));
const Blender = lazy(() => import("./pages/Blender"));

function checkTheme() {
  if (window.localStorage.getItem("theme") === null) {
    window.localStorage.setItem("theme", "true");
    return true;
  } else {
    if (window.localStorage.getItem("theme").search("false") !== -1) {
      return false;
    } else {
      return true;
    }
  }
}

function App() {
  const [theme, setTheme] = useState(checkTheme());
  const classes = useStyles();
  return (
    <HelmetProvider>
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
            <Suspense fallback={<Loader />}>
              <Header theme={theme} setTheme={setTheme} />
              <Switch>
                <Route path="/blender">
                  <Blender />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
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
            </Suspense>
            <ScrollToTopOnMount />
          </Router>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
const useStyles = makeStyles((theme) => ({
  app: {
    minHeight: "100vh",
  },
}));
