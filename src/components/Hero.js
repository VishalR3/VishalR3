import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import profile from "../assets/images/newProfile3.jpg";
import Tags from "./Tags";

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container>
        <Grid container alignItems="center">
          <Grid item md={6} className={classes.greetings}>
            <Typography variant="h6">Hello There👋</Typography>
            <Typography variant="h2">I am Vishal Rana</Typography>
            <div className={classes.quote}>
              <Typography variant="body1">
                Full Stack Web Developer, Designer, Problem Solver.
              </Typography>
            </div>
            <div className={classes.tags}>
              <Tags tag="JavaScript" />
              <Tags tag="React.js" />
              <Tags tag="PHP" />
              <Tags tag="TypeScript" />
              <Tags tag="Node.js" />
              <Tags tag="Express.js" />
              <Tags tag="MongoDB" />
              <Tags tag="GraphQL" />
              <Tags tag="SQL" />
              <Tags tag="Express" />
              <Tags tag="Three.js" />
              <Tags tag="UI/UX" />
              <Tags tag="Figma" />
              <Tags tag="Illustrator" />
              <Tags tag="Photoshop" />
            </div>
          </Grid>
          <Grid item md={6} className={classes.imageSection}>
            <div className={classes.flex}>
              <img
                src={profile}
                alt="Vishal Rana"
                className={classes.heroImage}
              />
            </div>
          </Grid>
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
      minHeight: "90vh",
    },
  },
  greetings: {
    [theme.breakpoints.down("sm")]: {
      padding: "6rem 2rem",
    },
  },
  heroImage: {
    maxWidth: "400px",
  },
  quote: {
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
      fontSize: "0.75rem",
    },
  },
  flex: {
    display: "flex",
    justifyContent: "center",
  },
  imageSection: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  tags: {
    marginTop: "2rem",
  },
}));
