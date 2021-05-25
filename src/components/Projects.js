import { Container, makeStyles, Typography } from "@material-ui/core";
import { PROJECTS } from "../assets/content/PROJECT";
// import Project from "./Project";
import Project from "./Project";

const Projects = () => {
  const classes = useStyles();
  const projects = PROJECTS;
  return (
    <div className={classes.wrapper} id="projects">
      <div className={classes.center}>
        <Typography variant="h4">Featured Projects</Typography>
      </div>
      <Container className={classes.projects}>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </Container>
    </div>
  );
};

export default Projects;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.dark,
    color: theme.palette.common.light,
    paddingBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "4rem",
    },
  },
  center: {
    textAlign: "center",
  },
  projects: {
    marginTop: "3rem",
  },
}));
