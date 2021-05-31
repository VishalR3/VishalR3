import {
  Container,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import profile from "../assets/images/profilePic.jpg";

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container>
        <Grid container alignItems="center">
          <Grid item sm={6} className={classes.greetings}>
            <Typography variant="h6">Hello There👋</Typography>
            <Typography variant="h2">I am Vishal Rana</Typography>
            <div className={classes.quote}>
              <Typography variant="body1">
                Full Stack Developer, Designer, Problem Solver.
              </Typography>
            </div>
          </Grid>
          {useMediaQuery("(min-width:600px)") ? (
            <Grid item sm={6} className={classes.imageSection}>
              <div className={classes.flex}>
                <img
                  src={profile}
                  alt="Vishal Rana"
                  loading="lazy"
                  className={classes.heroImage}
                />
              </div>
            </Grid>
          ) : (
            ""
          )}
        </Grid>
      </Container>
    </div>
  );
};
export default Hero;
const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.dark,
    color: theme.palette.common.light,
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "6rem",
    },
  },
  greetings: {
    [theme.breakpoints.down("xs")]: {
      padding: "6rem 2rem",
    },
  },
  heroImage: {
    maxWidth: "400px",
    maxHeight: "500px",
    objectFit: "cover",
    objectPosition: "50% 0",
  },
  quote: {
    marginTop: "1rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2rem",
      fontSize: "0.75rem",
    },
  },
  flex: {
    display: "flex",
    justifyContent: "center",
  },
  imageSection: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  tags: {
    marginTop: "2rem",
  },
}));
