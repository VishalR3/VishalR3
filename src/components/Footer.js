import { Container, Grid, makeStyles, Typography } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container>
        <Grid container>
          <Grid item md={4}>
            <Typography variant="subtitle1">© 2021 Vishal Rana</Typography>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h5" className={classes.name}>
              Vishal Rana
            </Typography>
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
  name: {
    textAlign: "center",
    fontWeight: theme.typography.fontWeightMedium,
  },
}));
