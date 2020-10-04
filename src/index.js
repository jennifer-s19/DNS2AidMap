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
    var map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/jasoncd31/ckfudam961on819nxezb4jdtt',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on('click', function(e) {
      var features = map.queryRenderedFeatures(e.point, {
        layers: ['aidmap-v4-cafb','aidmap-v4-casb'] // replace this with the name of the layer
      });
    
      if (!features.length) {
        return;
      }
    
      var feature = features[0];
    
      var popup = new mapboxgl.Popup({ offset: [0, -15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML('<h3>' + feature.properties.name +", " + feature.properties.city + '</h3><p>' + "<br>" +feature.properties.address + ', ' + feature.properties.postcode  + "</br>" + feature.properties.url + '</p>')
        .addTo(map);
    });
      

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
