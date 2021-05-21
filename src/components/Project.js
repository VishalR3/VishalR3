import { makeStyles, Typography } from "@material-ui/core";

const Project = ({ project }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography variant="h5">{project.project_name}</Typography>
      {project.description.map((para, index) => {
        return (
          <Typography variant="body1" className={classes.summary} key={index}>
            {para}
          </Typography>
        );
      })}
    </div>
  );
};
export default Project;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "#1b1818",
    color: "white",
    borderRadius: "1rem",
    padding: "2rem 4rem",
    marginBottom: "3rem",
    "&:hover": {
      boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
      transform: "scale(1.01)",
      transition: "transform",
      transitionDuration: "250ms",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem",
      marginInline: "0.5rem",
      marginBottom: "2rem",
    },
  },
  summary: {
    // textAlign: "justify",
    marginTop: "1rem",
  },
}));
