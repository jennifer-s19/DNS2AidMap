import React from 'react';
import './App.css';
import './sidebar.css';

function App() {
  return (
    <div className="App">
      <div>
        <div className="sidebar"> Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom} <div/>
      </div>
      <div ref={el => this.mapContainer = el} 
      
      className="mapContainer" />
    </div>
  </div>
  );
}

export default App;
