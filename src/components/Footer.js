import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="subtitle1" className={classes.copyText}>
              © 2021 Vishal Rana
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" className={classes.centerText}>
              Vishal Rana
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.rightText}>
              <a
                href="https://twitter.com/36Vishal"
                className={classes.socialLinks}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/vishal36/"
                className={classes.socialLinks}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/vishal_rana_36/"
                className={classes.socialLinks}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/thakurvishal.rajput.1"
                className={classes.socialLinks}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="mailto:vishal.ch.36@gmail.com"
                className={classes.socialLinks}
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Footer;
const useStyles = makeStyles((theme) => ({
  wrapper: {
    color: theme.palette.common.light,
    paddingBlock: "1rem",
  },
  copyText: {
    marginBottom: "1rem",
    color: theme.palette.common.light,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  centerText: {
    marginBottom: "1rem",
    textAlign: "center",
  },
  rightText: {
    marginBottom: "1rem",
    textAlign: "right",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  socialLinks: {
    marginInline: "1rem",
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
}));
