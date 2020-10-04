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
import AboutUs from "./AboutUs";
import UserSubmission from "./UserSubmission";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LanguageIcon from '@material-ui/icons/Language';

const options = [
  'Engligh (United States)',
  'Spanish',
  'Japanese',
  'Mandarin Chinese',
  'French',
  'Hindi',
  'Russian',
  "Portuguese"
];

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const ITEM_HEIGHT = 48;

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
            onClick={handleClick}
          >
            <LanguageIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
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
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/userSubmission">
            <UserSubmission />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
