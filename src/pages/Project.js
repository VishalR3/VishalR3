import {
  Container,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router";
import { PROJECTS } from "../assets/content/PROJECT";
import Tags from "../components/Tags";
import NotFound from "./NotFound";

const Project = () => {
  const { name } = useParams();
  const classes = useStyles();
  const project = PROJECTS.filter(
    (project) => project.project_name === name
  )[0];

  if (project !== undefined) {
    return (
      <>
        <Container>
          <Helmet>
            <title>{name} | Vishal Rana</title>
            <meta
              name="og:title"
              content={`${name} | Vishal Rana - Full Stack Developer`}
            />
            <meta
              name="twitter:title"
              content={`${name} | Vishal Rana - Full Stack Developer`}
            />
          </Helmet>
          <img
            alt={project.project_name}
            loading="lazy"
            src={`/images/${project.imagePath}`}
            className={classes.projectImage}
            style={{ viewTransitionName: "projectImage" }}
          />
          <Grid container className={classes.projectDetails} justify="center">
            <Grid item xs={12} sm={9}>
              {project.description.map((para, index) => {
                return (
                  <Typography
                    variant="body2"
                    key={index}
                    className={classes.para}
                  >
                    {para}
                  </Typography>
                );
              })}
            </Grid>
            <Grid item xs={12} sm={9}>
              <Divider />
              <div className={classes.tagWrapper}>
                {project.tags.map((tag, index) => (
                  <div className={classes.tags} key={index}>
                    <Tags tag={tag} />
                  </div>
                ))}
              </div>
              <Divider />

              <Grid
                container
                className={classes.redirectWrapper}
                justify="space-between"
              >
                <Grid item xs={12} sm={6} className={classes.redirect}>
                  <div className={classes.linkName}>
                    <i className="fab fa-github fa-lg"></i> Repository Link
                  </div>

                  <a
                    href="https://github.com/VishalR3"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa fa-external-link-alt"></i>
                  </a>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.redirect}>
                  <div className={classes.linkName}>
                    <i className="fab fa-chrome fa-lg"></i> Live
                  </div>

                  <a href={`/project/${name}`}>
                    <i className="fa fa-external-link-alt"></i>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  } else {
    return <NotFound />;
  }
};

export default Project;

const useStyles = makeStyles((theme) => ({
  projectImage: {
    width: "100%",
    borderRadius: "0.75rem",
  },
  projectDetails: {
    marginTop: "3rem",
    marginBottom: "3rem",
    color: theme.palette.common.light,
    viewTransitionName: "project-details",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    },
  },
  para: {
    paddingBottom: "2rem",
    overflowWrap: "break-word",
  },
  tagWrapper: {
    paddingTop: "1rem",
  },
  redirectWrapper: {
    paddingTop: "1rem",
    paddingBottom: "2.5rem",
  },
  redirect: {
    padding: "1rem",
    border: `0.25px solid ${theme.palette.common.light}`,
    borderRadius: "4px",
    marginBottom: "1rem",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "300px",
    },
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: theme.palette.common.light,
    },
  },
  linkName: {
    "& svg": {
      fontSize: "24px",
      marginRight: "0.5rem",
    },
  },
  tags: {
    paddingRight: "3rem",
    display: "inline-block",
    [theme.breakpoints.down("xs")]: {
      paddingRight: "1rem",
    },
  },
}));
