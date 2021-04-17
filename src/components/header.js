import {
  FormControlLabel,
  makeStyles,
  Switch,
  Typography,
} from "@material-ui/core";

const Header = ({ theme, setTheme }) => {
  const classes = useStyles();
  const toggleTheme = (e) => {
    setTheme(!theme);
    e.target.checked = theme;
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.flex}>
        <div>
          <Typography variant="h5">Vishal Rana</Typography>
        </div>
        <div>
          <FormControlLabel
            control={
              <Switch checked={theme} onChange={toggleTheme} name="Dark" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.dark,
    color: theme.palette.common.light,
    paddingBlock: "1rem",
    paddingInline: "2rem",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
