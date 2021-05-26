import { makeStyles } from "@material-ui/core";

const Tags = ({ tag }) => {
  const classes = useStyles();
  return <div className={classes.wrapper}>{tag}</div>;
};
export default Tags;
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "inline-block",
    color: theme.palette.secondary.main,
    padding: "0.25rem 0",
    borderRadius: "1.25rem",
    marginRight: "0.5rem",
    marginBottom: "1rem",
    // textTransform: "uppercase",
    fontWeight: "600",
    fontSize: "14px",
  },
}));
