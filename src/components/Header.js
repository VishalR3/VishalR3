import { useState } from "react";
import {
  FormControlLabel,
  makeStyles,
  SwipeableDrawer,
  Switch,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
const MobileNav = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const classes = useStyles();
  return (
    <div className={classes.mobileNav}>
      <button
        className={classes.menuBtn}
        onClick={() => setToggleDrawer(!toggleDrawer)}
      >
        <FaBars />
      </button>
      <SwipeableDrawer
        anchor="left"
        open={toggleDrawer}
        onClose={() => setToggleDrawer(false)}
        onOpen={() => setToggleDrawer(true)}
        className={classes.drawer}
      >
        <NavLink
          to="/"
          exact
          activeClassName={classes.active}
          className={classes.navLink}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          activeClassName={classes.active}
          className={classes.navLink}
        >
          About
        </NavLink>
        <NavLink
          to="/resume"
          activeClassName={classes.active}
          className={classes.navLink}
        >
          Resume
        </NavLink>
      </SwipeableDrawer>
    </div>
  );
};
const DesktopNav = () => {
  const classes = useStyles();
  return (
    <div className={classes.links}>
      <NavLink
        to="/"
        exact
        activeClassName={classes.active}
        className={classes.navLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        activeClassName={classes.active}
        className={classes.navLink}
      >
        About
      </NavLink>
      <a
        href="/resources/Vishal_CV.pdf"
        target="_blank"
        className={classes.navLink}
      >
        Resume
      </a>
    </div>
  );
};

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
        {useMediaQuery("(max-width:600px)") ? <MobileNav /> : <DesktopNav />}
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
  drawer: {
    backgroundColor: theme.palette.common.dark,
    padding: "2rem",
  },
  navLink: {
    textDecoration: "none",
    paddingInline: "1rem",
    color: theme.palette.common.light,
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem 4rem",
      color: theme.palette.common.dark,
    },
  },
  active: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.secondary.main,
  },
  mobileNav: {
    display: "flex",
    alignItems: "center",
  },
  menuBtn: {
    backgroundColor: theme.palette.common.dark,
    color: theme.palette.common.light,
    border: "none",
    fontSize: "24px",
    display: "grid",
    placeItems: "center",
    outline: "none",
  },
}));
