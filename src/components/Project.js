import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Tags from "./Tags";

const Project = ({ project }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" className={classes.project_name}>
            {project.project_name}
          </Typography>
          {project.tags.map((tag, index) => {
            if (index < 3) {
              return <Tags tag={tag} key={index} />;
            }
            return <span key={index}></span>;
          })}
          <Typography variant="body1" className={classes.summary}>
            {project.description[0].substr(0, 150)}
          </Typography>
          <div className={classes.redirectRow}>
            <Link
              to={`/project/${project.project_name}`}
              className={classes.redirects}
            >
              <i className="fas fa-link fa-lg"></i>
            </Link>
            <a
              href="https://github.com/VishalR3"
              className={classes.redirects}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.imageGrid}>
          <img
            alt={project.project_name}
            src={`/images/${project.imagePath}`}
            className={classes.projectImage}
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default Project;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.primary.primary60,
    color: theme.palette.common.light,
    // borderRadius: "1rem",
    padding: "2rem 4rem",
    marginBottom: "3rem",
    cursor: "pointer",
    border: `1px solid ${theme.palette.primary.primary10}`,
    [theme.breakpoints.down("sm")]: {
      padding: "0 1.5rem 1.5rem",
      marginBottom: "0rem",
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
  tagsRow: {},
  redirectRow: {
    display: "block",
    marginTop: "3rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
    },
  },
  redirects: {
    fontSize: "18px",
    textDecoration: "none",
    marginRight: "1rem",
    color: theme.palette.secondary.main,
  },

  imageGrid: {
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 0 1rem",
    },
  },
  projectImage: {
    width: "100%",
  },
}));
