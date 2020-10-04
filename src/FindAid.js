import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Map from './Map.js'

const useStyles = makeStyles((theme) => ({
  findAidContainer: {
    background: "linear-gradient(360deg, #AEF8FC 30%, #5CE1FE 90%)",
    width: "auto",
    height: "100vH",
    fontWeight: 600,
	  fontSize: 25,
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
  const [show, toggleShow] = React.useState(false);
  const testClick = () => {
    //console.log(zipValue)
    toggleShow(!show)
  }
  return (
    
    <div className={classes.findAidContainer}>
      <form>
      <Paper className={classes.paper}>
        <br></br>
        <br></br>
        <h1 style={{ marginTop: 0 }}>Find Aid</h1>
        <br></br>
        <div className={classes.zipcodeField}>
          <h4>1. Enter your Zipcode: </h4>
          <TextField
            className={classes.zipcode}
            
            variant="outlined"
            size="small"
            value={zipValue}
            onChange={(e) => setZipValue(e.target.value)}
          />
        </div>
        <script>
        </script>

        <br></br>
        <br></br>

        <br></br>
        <br></br>
        {/* <div className={classes.aidTypeField}>
          <h4>2. What type of aid are you looking for?</h4>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              
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
        </div> */}
        <br></br>
        <br></br>
        <br></br>
        <Button
          className={classes.doneButton}
          size="large"
          variant="contained"
          color="primary"
          onClick={() => testClick()}>
          
          Done
        </Button>
        {show && <Map zipCode={zipValue}/> }

        <br></br>
        <br></br>
      </Paper>
      </form>
    </div>
  );
}
