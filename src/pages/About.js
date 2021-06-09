import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { Helmet } from "react-helmet-async";
import profile from "../assets/images/profile_landscape.jpg";

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Helmet>
        <title>About | Vishal Rana</title>
        <meta
          name="og:title"
          content="About | Vishal Rana - Full Stack Developer"
        />
        <meta
          name="twitter:title"
          content="About | Vishal Rana - Full Stack Developer"
        ></meta>
      </Helmet>
      <Container className={classes.container}>
        <Grid container justify="center">
          <Grid item md={8} sm={12}>
            <Typography variant="h4" className={classes.heading}>
              About Me
            </Typography>
            <img
              alt="Vishal Rana"
              loading="lazy"
              src={profile}
              className={classes.profileImage}
            />
            <Typography variant="body1" className={classes.text}>
              I am Vishal Rana, Chemical Engineering Undergraduate from National
              Institute of Technology, Rourkela. I love to build things for the
              internet and show it to everybody. I am a skilled full stack web
              developer, and I am proficient in many tech stacks including LAMP
              and MERN stack.
            </Typography>
            <Typography variant="body1" className={classes.text}>
              I have done several full stack web development projects, and each
              experience brought me where I am today. To me, every project and
              every task is an oppurtunity to learn as much as I can.
            </Typography>
            <Typography variant="body1" className={classes.text}>
              I am always learning new stuff and building things with them. That
              is the reason why I am also a UI/ UX designer ("Full-Stack"), I am
              proficient in photoshop, illustrator and Blender. Recently I
              learned three.js, and it only enhanced my love for webGL and 3d
              experiences.
            </Typography>
            <Typography variant="body1" className={classes.text}>
              I am also an ML enthusiast and I ensure to involve it in my
              Projects wherever I can. Besides this, I like to play volleyball
              and football in my free time. I also enjoy swimming a lot. I like
              meeting with new people and making friends all over the world.
            </Typography>
            <Typography variant="body1" className={classes.text}>
              Want to meet me, Let's schedule a zoom sometime.
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
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  heading: {
    textAlign: "center",
    paddingBottom: "3rem",
  },
  profileImage: {
    width: "100%",
    aspectRatio: "16/9",
    objectFit: "cover",
    // objectPosition: "0 0",
    marginBottom: "2rem",
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
