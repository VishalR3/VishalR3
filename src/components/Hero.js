import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import profile from "../assets/images/profile.jpg";

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container>
        <Grid container alignItems="center">
          <Grid item md={6}>
            <Typography variant="h2">
              Hello There👋<br></br>I am Vishal Rana
            </Typography>
            <div className={classes.quote}>
              <Typography variant="body1">
                A fact about me here, preferrably mistake free and probably
                written by seome else
              </Typography>
            </div>
          </Grid>
          <Grid item md={6}>
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
    height: "90vh",
    backgroundColor: theme.palette.common.dark,
    color: theme.palette.common.light,
  },
  heroImage: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  quote: {
    marginTop: "1rem",
  },
  flex: {
    display: "flex",
    justifyContent: "center",
  },
}));
