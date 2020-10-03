import React, { useState } from "react";
//import { getToken, simpleFetch } from "./api";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  findAidContainer: {
    background: "linear-gradient(90deg, #AEF8FC 30%, #5CE1FE 90%)",
    width: "auto",
    height: "100vH",
  },
  zipcodeField: {},
  zipcode: {},
  distanceField: {},
  aidTypeField: {},
  paper: {
    margin: 50,
    height: "auto",
    background: "#12FA8D",
  },
  formControl: {
    minWidth: 120,
  },
}));

export default function Map() {
  const classes = useStyles();
  const [distance, setDistance] = React.useState("");
  const [aidType, setAidType] = React.useState("");

  const handleChange = (event) => {
    setDistance(event.target.value);
  };

  const handleClick = (event) => {
    setAidType(event.target.value);
  };

  return (
    <div className={classes.findAidContainer}>
      <Paper className={classes.paper}>
        <br></br>
        <br></br>
        <h1 style={{ marginTop: 0 }}>Find Aid</h1>
        <br></br>
        <div className={classes.zipcodeField}>
          <h4>1. Enter your Zipcode: </h4>
          <TextField
            className={classes.zipcode}
            label="Ex: 12345"
            variant="outlined"
            size="small"
          />
        </div>
        <br></br>
        <br></br>
        <div className={classes.distanceField}>
          <h4>2. How far do you want to travel?</h4>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Distance
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={distance}
              onChange={handleChange}
              label="Distance"
            >
              <MenuItem value={1}>1 mile</MenuItem>
              <MenuItem value={2}>2 miles</MenuItem>
              <MenuItem value={5}>5 miles</MenuItem>
              <MenuItem value={10}>10 miles</MenuItem>
              <MenuItem value={15}>15 miles</MenuItem>
              <MenuItem value={20}>20 miles</MenuItem>
              <MenuItem value={25}>25 miles</MenuItem>
            </Select>
          </FormControl>
        </div>
        <br></br>
        <br></br>
        <div className={classes.aidTypeField}>
          <h4>3. What type of aid are you looking for?</h4>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Aid Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={aidType}
              onChange={handleClick}
              label="Aid Type"
            >
              <MenuItem value={1}>WiFi</MenuItem>
              <MenuItem value={2}>HotSpots</MenuItem>
              <MenuItem value={3}>Food Banks</MenuItem>
            </Select>
          </FormControl>
        </div>
        <br></br>
        <br></br>
        <Button
          className={classes.doneButton}
          size="large"
          variant="contained"
          color="primary"
        >
          Done
        </Button>
        <br></br>
        <br></br>
      </Paper>
    </div>
  );
}
