import { Container, makeStyles, Typography } from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container>
        <Typography variant="subtitle1" className={classes.copyText}>
          © 2021 Vishal Rana
        </Typography>
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
    textAlign: "center",
  },
}));
