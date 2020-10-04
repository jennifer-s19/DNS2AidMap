import React from "react";
import "./AppHeader";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    background: "linear-gradient(360deg, #AEF8FC 30%, #5CE1FE 90%)",
    width: "auto",
    length: "auto",
    fontWeight: 600,
    fontSize: 25,
  },

  heading: {
    width: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    marginRight: 60,
    marginLeft: 60,
  },
  welcome: {
    alignContent: "center",
    fontSize: "400%",
  },

  cards: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignContent: "right",
  },

  jason: {
    maxWidth: "auto",
    maxHeight: 100,
    flex: 1,
  },
  tanya: {
    maxWidth: "auto",
    maxHeight: 100,
    flex: 1,
  },
  saad: {
    flex: 1,
    maxWidth: "auto",
    maxHeight: 100,
  },
  jennifer: {
    flex: 1,
    maxWidth: "auto",
    maxHeight: 100,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.title}>
      <div className={classes.heading}>
        <h1 className={classes.welcome}>About</h1>
        <h3 style={{ fontSize: "150%" }}>How to Use Aid Map</h3>
        <p>
          1. Click "Find Aid" in the top right corner.
          <br></br>
          2. Type your zipcode into the text box
          <br></br>
          3. Select the type of aid you are looking for
          <br></br>
          4. Click "Done"
          <br></br>
          5. Click "Submit"
          <br></br>
          6. View the map suggestions!
        </p>
        <h3 style={{ fontSize: "150%" }}>History</h3>
        <p>
          Aid Map was created in 48 hours during IvyHacks in Fall 2020. It was
          created by four sophomore computer science students from Loyola
          Marymount University to assist families with WiFi issues during this
          virtual schooling time.
        </p>
        <h3 style={{ fontSize: "150%" }}>Founders</h3>
        <div className={classes.cards}>
          <div className={classes.jason}>
            <Card>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Jason Douglas
                </Typography>
              </CardContent>
            </Card>
          </div>
          <br></br>
          <div className={classes.tanya}>
            <Card className={classes.tanya}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Tanya Nobal
                </Typography>
              </CardContent>
            </Card>
          </div>
          <br></br>
          <div className={classes.saad}>
            <Card className={classes.saad}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Saad Salman
                </Typography>
              </CardContent>
            </Card>
          </div>
          <br></br>
          <div className={classes.jennifer}>
            <Card>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Jennifer Siao
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
