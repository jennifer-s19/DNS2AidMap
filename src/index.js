import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import mapboxgl from 'mapbox-gl';
import App from './App';
import * as serviceWorker from './serviceWorker';

mapboxgl.accessToken = 'pk.eyJ1IjoiamFzb25jZDMxIiwiYSI6ImNrZnNydTM3bzBwdjEyd25weWZ1eDdwNmIifQ.Wu020OyV0VPIxgxMO905Ig';

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -118,
      lat: 34,
      zoom: 2
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
    var marker = new mapboxgl.Marker()
    .setLngLat([-118, 34])
    .addTo(map);
  }
  render() {
    return (
      <div>
        <div ref={el => this.mapContainer = el} className="mapContainer"/>
      </div>
    )
  }
}

   

ReactDOM.render(
<Application />, document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
