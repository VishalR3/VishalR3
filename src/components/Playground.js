import { makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

const Playground = () => {
  const classes = useStyles();
  const history = useHistory();

  const goToPlayground = () => {
    history.push(`/blender`);
  };
  return (
    <div className={classes.wrapper} onClick={() => goToPlayground()}>
      <Typography variant="h2" className={classes.headingText}>
        Playground
      </Typography>
      <Typography variant="body1" className={classes.description}>
        A safe haven for my works other than Web App Development.
      </Typography>
    </div>
  );
};

export default Playground;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.primary.primary70,
    color: theme.palette.common.light,
    // borderRadius: "1rem",
    padding: "6rem 4rem",
    marginBottom: "3rem",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      padding: "3rem 1.5rem",
      marginTop: "1rem",
      marginBottom: "2rem",
    },
  },
  headingText: {
    textAlign: "center",
    textDecoration: "underline",
    textUnderlineOffset: "10px",
    // fontWeight: "700",
  },
  description: {
    marginTop: "2rem",
    textAlign: "center",
  },
}));
