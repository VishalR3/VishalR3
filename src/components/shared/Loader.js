import { makeStyles } from "@material-ui/core";
import { Logo } from "../Header";
import "../../assets/css/rotation.css";

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.logoContainer}>
        <Logo />
      </div>
    </div>
  );
};

export default Loader;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "grid",
    placeItems: "center",
    width: "100vw",
    height: "100vh",
  },
  logoContainer: {
    animation: "rotation 2s infinite linear",
  },
}));
