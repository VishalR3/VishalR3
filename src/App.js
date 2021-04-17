import { useState } from "react";
import { ThemeProvider } from "@material-ui/styles";

//Components
import Header from "./components/header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

//themes
import lightTheme from "./config/themes/light";
import darkTheme from "./config/themes/dark";

function App() {
  const [theme, setTheme] = useState(true);
  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <div className="App">
        <Header theme={theme} setTheme={setTheme} />
        <Hero />
        <Projects />
      </div>
    </ThemeProvider>
  );
}

export default App;
