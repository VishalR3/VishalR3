import { useRef, useState } from "react";
import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";

//css
import "../assets/css/darkToggle.css";

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
            href="/#projects"
            className={classes.navLink}
            onClick={() => toggleMenu()}
          >
            Projects
          </a>
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
const DesktopNav = ({ theme, setTheme }) => {
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
      <a
        href="/resources/Vishal_CV.pdf"
        target="_blank"
        className={classes.navLink}
      >
        Resume
      </a>
      <ThemeSwitcher
        theme={theme}
        setTheme={setTheme}
        className={classes.navLink}
      />
    </div>
  );
};

const ThemeSwitcher = ({ theme, setTheme, className }) => {
  const [toggle, setToggle] = useState(0);
  const toggleTheme = (e) => {
    setToggle(!toggle);
    setTheme(!theme);
  };
  return (
    <div className={className}>
      <input
        id="toggle"
        className="toggle"
        type="checkbox"
        value={toggle}
        onClick={() => toggleTheme()}
      ></input>
    </div>
  );
};
const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <Typography variant="h5">{"{ "}</Typography>
      <Typography variant="h4" className={classes.V}>
        {"V"}
      </Typography>
      <Typography variant="h5">{" }"}</Typography>
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
            <Logo />
          </Link>
        </div>
        {useMediaQuery("(max-width:600px)") ? (
          <MobileNav headerRef={headerRef} theme={theme} setTheme={setTheme} />
        ) : (
          <>
            <DesktopNav theme={theme} setTheme={setTheme} />
          </>
        )}
      </div>
    </div>
  );
};

export { Logo };
export default Header;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.dark,
    color: theme.palette.common.light,
    paddingBlock: "0.5rem",
    paddingInline: "2rem",
    position: "sticky",
    top: "0",
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: {
    textDecoration: "none",
  },
  drawerScaffold: {
    position: "fixed",
    top: "4rem",
    left: "0",
    width: "100vw",
    height: "calc(100vh - 4rem)",
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
  links: {
    display: "flex",
    alignItems: "center",
  },
  navLink: {
    display: "inline-block",
    textDecoration: "none",
    paddingInline: "1rem",
    color: theme.palette.common.light,
    [theme.breakpoints.down("xs")]: {
      fontFamily: "Inter",
      padding: "2rem 0 0",
      lineHeight: "1",
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

  logo: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.common.light,
    "&:hover": {
      color: theme.palette.secondary.main,
      transition: "all 350ms",
    },
  },
  V: {
    paddingInline: "0.5rem",
    fontFamily: theme.typography.fontFamily,
    fontWeight: "600",
  },
}));
