import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <Grid container justify="center">
          <Grid item md={8} sm={12}>
            <Typography variant="h4" className={classes.heading}>
              About Me
            </Typography>
            <Typography variant="body1" className={classes.text}>
              I am Vishal Rana, Chemical Undergraduate from National Institute
              of Technology, Rourkela. I love to build things. I am a skilled
              full stack web developer, and I am proficient in many tech stacks
              including LAMP and MERN stack. I am always learning new stuff and
              building things with them. Exploring the capabilities of computer
              science is my hobby. That is the reason why I am also a UI/ UX
              designer, I am intermediate in photoshop, illustrator and Blender.
              I learned three.js, due to my love for webGL and 3d experiences.
              Three.js is amazing and I have used in many projects. I am also an
              ML enthusiast, and I am crazy with the DS as well. Basically I am
              saying that I am an all in one kinda deal and you will not find
              anyone else like me...
            </Typography>
            <Typography variant="body1" className={classes.text}>
              JUST HIRE ME...Ploxx...
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.dark,
    color: theme.palette.common.light,
    paddingBlock: "4rem",
  },
  heading: {
    textAlign: "center",
    paddingBottom: "3rem",
  },
  text: {
    lineHeight: "2",
    padding: "1rem",
    textAlign: "justify",
  },
  container: {
    justifyItems: "center",
  },
}));
