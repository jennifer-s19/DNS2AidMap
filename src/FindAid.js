import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  findAidContainer: {
    background: "linear-gradient(360deg, #AEF8FC 30%, #5CE1FE 90%)",
    width: "auto",
    height: "100vH",
  },
  zipcodeField: {},
  zipcode: {},
  paper: {
    margin: 50,
    height: "auto",
    background: "#FFF",
  },
  formControl: {
    minWidth: 120,
  },
  doneButton: {
    backgroundColor: "#336EFF",
  },
}));

export default function FindAid() {
  const classes = useStyles();
  const [zipValue, setZipValue] = useState("");
  const [aidValue, setAidValue] = useState("");
  //need to check zipcode values

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
            value={zipValue}
            onChange={(e) => setZipValue(e.target.value)}
          />
        </div>
        <br></br>
        <br></br>

        <br></br>
        <br></br>
        <div className={classes.aidTypeField}>
          <h4>2. What type of aid are you looking for?</h4>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Aid Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={aidValue}
              onChange={(e) => setAidValue(e.target.value)}
              label="Aid Type"
            >
              <MenuItem disabled value="  ">
                <em>Search for</em>
              </MenuItem>
              <MenuItem value={"WiFi"}>WiFi Hotspots</MenuItem>
              <MenuItem value={"Food"}>Food Banks</MenuItem>
            </Select>
          </FormControl>
        </div>
        <br></br>
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
