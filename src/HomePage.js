import React from "react";
import "./AppHeader";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    background: "linear-gradient(90deg, #FE6B8B 30%, #FF8E53 90%)",
    width: "auto",
    length: "auto",
    fontWeight: 600,
    fontSize: 25,
  },

  heading: {
    width: "auto",
    height: 500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  welcome: {
    marginTop: 0,
    alignContent: "center",
    fontSize: "400%",
  },

  linkButton: {
    backgroundColor: "#336EFF",
  },

  mission: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    marginRight: 60,
    marginLeft: 60,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <div className={classes.heading}>
        <br></br>
        <br></br>
        <h1 className={classes.welcome}>Welcome to Aid Map!</h1>
        <h2>Follow the map to find your aid</h2>
        <br></br>
        <Link to="/map" style={{ textDecoration: "none" }}>
          <Button
            className={classes.linkButton}
            size="large"
            variant="contained"
            color="primary"
          >
            Map
          </Button>
        </Link>
      </div>
      <div className={classes.mission}>
        <h3 style={{ fontSize: "200%" }}>Our Mission</h3>
        <p id="mission">
          Connecting people with necessities during these virtual times. Use Aid
          Map to find FREE local hotspots, WiFi, and food banks near you!
        </p>
        <div id="facts">
          <h3 className="info" style={{ fontSize: "200%" }}>
            Why was Aid Map created?
          </h3>
          <ul>
            <p>
              With the switch to virtual schooling, many children do not have
              access to adequate WiFi to attend Zoom lectures. As a result,
              attendance has dropped dramatically and children are at risk of
              dropping out of school entirely.
            </p>
            <p>
              Aid Map was created as a resource and helper tool for families. It
              connects families with nearby resources like free WiFi, free
              hotspots, and food banks to assist them during the virtual
              schooling era.
            </p>
          </ul>
        </div>
        <div id="reasons">
          <h3 className="info" style={{ fontSize: "200%" }}>
            How can you support Aid Map?
          </h3>
          <ul>
            <p>
              You can support Aid Map by contributing to our data collection. If
              you notice that a place is offering free WiFi or hotspots please
              input the name and address into our User Submission form. This way
              we can offer more resources to families in need.
            </p>
            <p>
              You can also donate directly to an organization supporting
              children's education.
            </p>
          </ul>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <div>
        {/* <Switch>
          <Route exact path="/map">
            <Map />
          </Route>
        </Switch> */}
      </div>
    </div>
  );
}
