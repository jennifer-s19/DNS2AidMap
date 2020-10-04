import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { banksAPI } from './api';
import Map from './Map.js'

function App() {

  const [banks, setBanks] = useState([]) 
  useEffect(() => {
    let req = 'https://controllerdata.lacity.org/resource/v2mg-qsxf.json'
    fetch(req).then(r => r.json()).then(r => setBanks(r));
  }, []);
  
 
  const [show, toggleShow] = React.useState(false);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Map />
          {banks && banks.map(bank => bank.name)}
        </p>
      </header> */}
      <button onClick={() => toggleShow(!show)}>
        toggle: {show ? 'show' : 'hide'}
      </button>    
      {show && <Map />}
    </div>
  );
}


export default App;
