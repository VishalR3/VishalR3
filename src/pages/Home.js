import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Playground from "../components/Playground";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Vishal Rana | Portfolio</title>
      </Helmet>
      <Hero />
      <Projects />
      <Playground />
    </>
  );
};
export default Home;
