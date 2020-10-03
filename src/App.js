import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { banksAPI } from './api';

function App() {

  const [banks, setBanks] = useState([]) 
  useEffect(() => {
    let req = 'https://controllerdata.lacity.org/resource/v2mg-qsxf.json'
    fetch(req).then(r => r.json()).then(r => setBanks(r));
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {banks && banks.map(bank => bank.name)}
        </p>
      </header>
    </div>
  );
}

export default App;
