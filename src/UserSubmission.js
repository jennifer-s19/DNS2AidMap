import React from "react";
import "./AppHeader";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    background: "linear-gradient(360deg, #AEF8FC 30%, #5CE1FE 90%)",
    width: "auto",
    length: "auto",
    fontWeight: 600,
    fontSize: 25,
  },
  paper: {
    margin: 50,
    height: "auto",
    background: "#FFF",
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
  formControl: {
    minWidth: 120,
  },
  doneButton: {
    backgroundColor: "#336EFF",
  },
}));

export default function Home() {
  const classes = useStyles();
  const [nameValue, setNameValue] = useState("");
  const [streetAddressValue, setStreetAddressValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [zipAddressValue, setZipAddressValue] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [aidValue, setAidValue] = useState("");
  const onSubmit = () => {
    alert("Thank you for your submission! Please navigate back to the Home Page by clicking on the Aid Map logo in the toolbar");
  };

  return (
    <div className={classes.title}>
      <form>
        <div className={classes.heading}>
          <Paper className={classes.paper}>
            <br></br>
            <br></br>
            <h1 style={{ marginTop: 0 }}>User Submission Form</h1>
            <h3>*Only for actual FREE resources</h3>
            <h4>
              Please submit a user submission if you came across a place
              offering free WiFi Hotspots or a Foodbank
            </h4>
            <p>
              We appreciate your contribution!
              <br></br>- Aid Map Founders
            </p>
            <br></br>
            <div className={classes.nameField}>
              <h4>Enter the Name of the establishment: </h4>
              <TextField
                className={classes.name}
                label="Name"
                variant="outlined"
                size="small"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
              />
            </div>
            <div className={classes.addressField}>
              <h4>Enter the Street Address: </h4>
              <TextField
                className={classes.streetAddress}
                label="Street Address"
                variant="outlined"
                size="small"
                value={streetAddressValue}
                onChange={(e) => setStreetAddressValue(e.target.value)}
              />
              <h4>Enter the City: </h4>
              <TextField
                className={classes.city}
                label="City"
                variant="outlined"
                size="small"
                value={cityValue}
                onChange={(e) => setCityValue(e.target.value)}
              />
              <h4>Enter the Zipcode: </h4>
              <TextField
                className={classes.zipAddress}
                label="Zipcode"
                variant="outlined"
                size="small"
                value={zipAddressValue}
                onChange={(e) => setZipAddressValue(e.target.value)}
              />
              <h4>Enter the Country: </h4>
              <TextField
                className={classes.country}
                label="Country"
                variant="outlined"
                size="small"
                value={countryValue}
                onChange={(e) => setCountryValue(e.target.value)}
              />
            </div>
            <div className={classes.aid}>
              <h4>What is the Aid Type?</h4>
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
            <Button className={classes.doneButton}
              size="large"
              variant="contained"
              color="primary"
              justifyContent="center"
              onClick={onSubmit}>

              Submit
            </Button >
            <br></br>
            <br></br>
          </Paper>
          <br></br>
          <br></br>
        </div>
      </form>
    </div>
  );
}
