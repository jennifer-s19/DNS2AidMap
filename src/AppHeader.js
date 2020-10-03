import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./AppHeader";
import HomePage from "./HomePage";
import FindAid from "./FindAid";

//import Map from "./Map";
//import About from "./About";
//import UserSubmission from "./UserSubmission";

const useStyles = makeStyles((theme) => ({
  root: {
    root: {
      display: "flex",
      flex: 1,
      maxWidth: 748,
      maxHeight: 526,
      minHeight: 526,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: 600,
  },

  headerLink: {
    display: "flex",
    flexGrow: 1,
    fontWeight: 600,
  },

  buttons: {
    display: "flex",
    alignContent: "right",
    marginLeft: "auto",
  },

  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
}));

export default function AppHeader() {
  const classes = useStyles();
  return (
    <Router>
      <AppBar position="static" style={{ background: "#336EFF" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link
            to="/"
            className="headerLink"
            style={{ textDecoration: "none", color: "#FFF" }}
          >
            <Typography variant="h3" className={classes.title}>
              Aid Map
            </Typography>
          </Link>
          <div className={classes.buttons}>
            <Link
              to="/findAid"
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              <Button color="inherit">Find Aid</Button>
            </Link>
            <Link to="/about" style={{ textDecoration: "none", color: "#FFF" }}>
              <Button color="inherit">About</Button>
            </Link>
            <Link
              to="/userSubmission"
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              <Button color="inherit">User Submissions</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/findAid">
            <FindAid />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/userSubmission">
            <UserSubmission />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}
