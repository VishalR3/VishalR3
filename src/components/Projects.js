import { Container, makeStyles, Typography } from "@material-ui/core";
import Project from "./Project";

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.center}>
        <Typography variant="h4">Projects</Typography>
      </div>
      <Container className={classes.projects}>
        <Project />
        <Project />
        <Project />
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
  },
  center: {
    textAlign: "center",
  },
  projects: {
    marginTop: "3rem",
  },
}));
