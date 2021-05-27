import { Container, makeStyles } from "@material-ui/core";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const NotFound = () => {
  const classes = useStyles();
  return (
    <Container>
      <Helmet>
        <title>404 | Not Found | Vishal Rana | Portfolio</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className={classes.wrapper}>
        <div className={classes.errorCode}>404</div>
        <div className={classes.errorDescription}>Page Not Found</div>
        <div className={classes.errorSolution}>
          Try entering a valid url or go back to <Link to="/">Home</Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.light,
    textAlign: "center",
    padding: "3rem 1rem",
    borderRadius: "12px",
    marginTop: "2rem",
    marginBottom: "2rem",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
  },
  errorCode: {
    fontFamily: "inter",
    fontSize: "120px",
    fontWeight: "900",
  },
  errorDescription: {
    fontFamily: "inter",
    fontSize: "32px",
    marginTop: "1rem",
  },
  errorSolution: {
    fontFamily: "inter",
    fontSize: "18px",
    marginTop: "3rem",
    "& a": {
      textDecoration: "none",
      color: theme.palette.secondary.main,
    },
  },
}));
