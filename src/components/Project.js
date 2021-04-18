import { makeStyles, Typography } from "@material-ui/core";

const Project = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography variant="h5">Project A</Typography>
      <p className={classes.summary}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
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
