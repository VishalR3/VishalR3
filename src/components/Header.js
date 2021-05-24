import { useRef, useState } from "react";
import {
  FormControlLabel,
  makeStyles,
  Switch,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
const MobileNav = ({ headerRef, theme, setTheme }) => {
  const [toggleDrawer, setToggleDrawer] = useState(true);
  const drawerRef = useRef(null);
  const classes = useStyles();

  const toggleMenu = () => {
    const rect = headerRef.current.getBoundingClientRect();
    drawerRef.current.style.top = rect.bottom + "px";
    setToggleDrawer(!toggleDrawer);
  };

  return (
    <div className={classes.mobileNav}>
      <button className={classes.menuBtn} onClick={() => toggleMenu()}>
        <FaBars />
      </button>
      <div
        ref={drawerRef}
        className={`${classes.drawerScaffold} ${
          toggleDrawer ? classes.hidden : ""
        }`}
      >
        <div className={`${classes.drawer} `}>
          <NavLink
            to="/"
            exact
            activeClassName={classes.active}
            className={classes.navLink}
            onClick={() => toggleMenu()}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            activeClassName={classes.active}
            className={classes.navLink}
            onClick={() => toggleMenu()}
          >
            About
          </NavLink>
          <a
            href="/resources/Vishal_CV.pdf"
            target="_blank"
            className={classes.navLink}
            onClick={() => toggleMenu()}
          >
            Resume
          </a>
          <div className={classes.navLink}>
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </div>
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

const ThemeSwitcher = ({ theme, setTheme }) => {
  const toggleTheme = (e) => {
    setTheme(!theme);
    e.target.checked = theme;
  };
  return (
    <div>
      <FormControlLabel
        control={<Switch checked={theme} onChange={toggleTheme} name="Dark" />}
      />
    </div>
  );
};

const Header = ({ theme, setTheme }) => {
  const classes = useStyles();
  const headerRef = useRef(null);
  return (
    <div className={classes.wrapper} ref={headerRef}>
      <div className={classes.flex}>
        <div>
          <Link to="/" className={classes.brand}>
            <Typography variant="h5">Vishal Rana</Typography>
          </Link>
        </div>
        {useMediaQuery("(max-width:600px)") ? (
          <MobileNav headerRef={headerRef} theme={theme} setTheme={setTheme} />
        ) : (
          <>
            <ThemeSwitcher theme={theme} setTheme={setTheme} />
            <DesktopNav />
          </>
        )}
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
  brand: {
    textDecoration: "none",
    color: theme.palette.common.light,
  },
  drawerScaffold: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    transition: "all 350ms",
    transform: "translateX(0)",
    opacity: "1",
  },
  hidden: {
    transform: "translateX(-100%)",
    opacity: "0",
  },
  // openDrawer: {
  //   transform: "translateX(0)",
  // },
  // closedDrawer: {
  //   transform: "translateX(-100%)",
  // },
  drawer: {
    backgroundColor: theme.palette.common.dark,
    padding: "6rem 4rem 2rem 1rem",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "flex-start",
    height: "100vh",
    boxSizing: "border-box",
    // transition: "all 350ms",
  },
  navLink: {
    textDecoration: "none",
    paddingInline: "1rem",
    color: theme.palette.common.light,
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 0 0",
      fontSize: "36px",
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
