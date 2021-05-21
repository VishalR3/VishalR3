import { makeStyles, Typography } from "@material-ui/core";

const Project = ({ project }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography variant="h5">{project.project_name}</Typography>
      {project.description.map((para, index) => {
        return (
          <p className={classes.summary} key={index}>
            {para}
          </p>
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
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem",
      marginInline: "0.5rem",
      marginBottom: "2rem",
    },
  },
  summary: {
    textAlign: "justify",
  },
}));
