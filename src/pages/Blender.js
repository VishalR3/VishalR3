import { Container, makeStyles, Typography } from "@material-ui/core";
import SunnyHouse from "../components/Blender/SunnyHouse";
import SideHouse from "../components/Blender/SideHouse";
import AnotherHouse from "../components/Blender/AnotherHouse";

const Blender = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container>
        <div className={classes.pageTitle}>
          <Typography variant="h2">Blender Projects</Typography>
        </div>
      </Container>
      <SunnyHouse />
      <SideHouse />
      <AnotherHouse />
    </div>
  );
};

export default Blender;

const useStyles = makeStyles((theme) => ({
  wrapper: {},
  pageTitle: {
    color: theme.palette.primary.primary30,
    marginTop: "2rem",
  },
}));
