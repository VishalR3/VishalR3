import { useRef, useState } from "react";
import {
  FormControlLabel,
  makeStyles,
  Switch,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
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
      <button
        className={`hamburger hamburger--collapse ${classes.menuBtn} ${
          toggleDrawer ? "" : "is-active"
        }`}
        type="button"
        onClick={() => toggleMenu()}
      >
        <span className="hamburger-box">
          <span className={`hamburger-inner ${classes.bar}`}></span>
        </span>
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
            href="#projects"
            className={classes.navLink}
            onClick={() => toggleMenu()}
          >
            Projects
          </a>
          <NavLink
            to="/contact"
            activeClassName={classes.active}
            className={classes.navLink}
            onClick={() => toggleMenu()}
          >
            Contact
          </NavLink>
          <a
            href="/resources/Vishal_CV.pdf"
            target="_blank"
            className={classes.navLink}
            onClick={() => toggleMenu()}
          >
            Resume
          </a>
          <ThemeSwitcher
            theme={theme}
            setTheme={setTheme}
            className={classes.navLink}
          />
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
      <a href="/#projects" className={classes.navLink}>
        Projects
      </a>
      <NavLink
        to="/contact"
        activeClassName={classes.active}
        className={classes.navLink}
      >
        Contaact
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

const ThemeSwitcher = ({ theme, setTheme, className }) => {
  const toggleTheme = (e) => {
    setTheme(!theme);
    e.target.checked = theme;
  };
  return (
    <div className={className}>
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
    alignItems: "center",
  },
  brand: {
    textDecoration: "none",
    color: theme.palette.common.light,
  },
  drawerScaffold: {
    position: "fixed",
    top: "4rem",
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
  drawer: {
    backgroundColor: theme.palette.common.dark,
    padding: "2rem 4rem 2rem 1rem",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "flex-start",
    height: "100vh",
    boxSizing: "border-box",
  },
  navLink: {
    textDecoration: "none",
    paddingInline: "1rem",
    color: theme.palette.common.light,
    [theme.breakpoints.down("sm")]: {
      fontFamily: "Questrial",
      padding: "2rem 0 0",
      fontSize: "32px",
      letterSpacing: "3px",
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
  menuBtn: {},
  bar: {
    backgroundColor: `${theme.palette.common.light} !important`,
    "&:after,&:before": {
      backgroundColor: `${theme.palette.common.light} !important`,
    },
  },
}));
