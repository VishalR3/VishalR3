import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Playground from "../components/Playground";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Vishal Rana - Full Stack Developer</title>
        <meta name="og:title" content="Vishal Rana - Full Stack Developer" />
        <meta
          name="twitter:title"
          content="Vishal Rana - Full Stack Developer"
        ></meta>
      </Helmet>
      <Hero />
      <Projects />
      <Playground />
    </>
  );
};
export default Home;
