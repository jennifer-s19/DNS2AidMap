import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppHeader from "./AppHeader";

const useStyles = makeStyles((theme) => ({
  App: {
    background: "linear-gradient(90deg, #AEF8FC 30%, #5CE1FE 90%)",
    textAlign: "center",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <AppHeader />
    </div>
  );
}

export default App;
