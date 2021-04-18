import { makeStyles } from "@material-ui/core";

const Tags = ({ tag }) => {
  const classes = useStyles();
  return <div className={classes.wrapper}>{tag}</div>;
};
export default Tags;
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "inline-block",
    backgroundColor: "#666666",
    padding: "0.25rem 1.5rem",
    borderRadius: "1.25rem",
    marginRight: "0.5rem",
    marginBottom: "1rem",
  },
}));
