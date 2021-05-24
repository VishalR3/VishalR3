import { Grid, makeStyles, Typography } from "@material-ui/core";
import Tags from "./Tags";

const Project2 = ({ project }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.wrapper}
      style={{
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/${project.imagePath}') `,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Typography variant="h3" className={classes.project_name}>
        {project.project_name}
      </Typography>
      <Typography variant="body1" className={classes.summary}>
        {project.description[0]}
      </Typography>
      <div className={classes.footer}>
        <Grid container>
          <Grid item xs={12} sm={9} className={classes.tagsRow}>
            {project.tags.map((tag, index) => (
              <Tags tag={tag} key={index} />
            ))}
          </Grid>
          <Grid item xs={12} sm={3} className={classes.redirectRow}>
            <a href="https://github.com/VishalR3" className={classes.redirects}>
              <i className="fab fa-github fa-lg"></i>
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Project2;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    color: theme.palette.common.white,
    borderRadius: "1rem",
    padding: "2rem 4rem",
    marginBottom: "3rem",
    textAlign: "center",
    "&:hover": {
      boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
      transform: "scale(1.01)",
      transition: "transform",
      transitionDuration: "250ms",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem",
      marginInline: "0.5rem",
      marginBottom: "2rem",
    },
  },
  project_name: {
    paddingTop: "2rem",
    paddingBottom: "1rem",
  },
  summary: {
    // textAlign: "justify",
    marginTop: "1rem",
  },
  footer: {
    marginTop: "2rem",
    textAlign: "left",
  },
  tagsRow: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  redirectRow: {
    display: "block",
    textAlign: "end",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  redirects: {
    fontSize: "24px",
    textDecoration: "none",
    color: theme.palette.secondary.main,
  },
}));
