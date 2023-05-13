import { useRef } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import Tags from "./Tags";

const Project = ({ project }) => {
  const imageRef = useRef();
  const classes = useStyles();
  const history = useHistory();

  const updateDom = () => {
    imageRef.current.style.viewTransitionName = "";
    imageRef.current = null;
    history.push(`/project/${project.project_name}`);
  };
  const goToProject = () => {
    if (imageRef.current !== null)
      imageRef.current.style.viewTransitionName = "projectImage";
    if (!document.startViewTransition) {
      updateDom();
      return;
    }
    document.startViewTransition(() => {
      updateDom();
    });
  };
  return (
    <div className={classes.wrapper} onClick={() => goToProject()}>
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
            {project.excerpt}
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
            ref={imageRef}
            alt={project.project_name}
            loading="lazy"
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
    transition:
      "background-color 300ms ease-in-out 100ms, color 300ms ease-in-out 100ms",
    [theme.breakpoints.down("xs")]: {
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
    [theme.breakpoints.down("xs")]: {
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
    [theme.breakpoints.down("xs")]: {
      padding: "2rem 0 1rem",
    },
  },
  projectImage: {
    width: "100%",
  },
}));
