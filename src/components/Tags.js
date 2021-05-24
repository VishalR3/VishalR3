import { makeStyles } from "@material-ui/core";

const Tags = ({ tag }) => {
  const classes = useStyles();
  return <div className={classes.wrapper}>{tag}</div>;
};
export default Tags;
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "inline-block",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    padding: "0.25rem 1.5rem",
    borderRadius: "1.25rem",
    marginRight: "0.5rem",
    marginBottom: "1rem",
    // textTransform: "uppercase",
    fontWeight: "600",
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      padding: "0.25rem 1rem",
      margiRight: "0.25rem",
      /* background-color: #f50057; */
    },
  },
}));
