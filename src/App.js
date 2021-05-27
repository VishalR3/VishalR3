import { useState, Suspense, lazy } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { makeStyles } from "@material-ui/core";

//themes
import lightTheme from "./config/themes/light";
import darkTheme from "./config/themes/dark";
import Loader from "./components/shared/Loader";
import ScrollToTopOnMount from "./components/shared/ScrollToTopOnMount";

//Pages
const Home = lazy(() => import("./pages/Home"));
const Project = lazy(() => import("./pages/Project"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Contact = lazy(() => import("./pages/Contact"));
const Blender = lazy(() => import("./pages/Blender"));

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
          <Suspense fallback={<Loader />}>
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
          </Suspense>
          <Footer />
          <ScrollToTopOnMount />
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
