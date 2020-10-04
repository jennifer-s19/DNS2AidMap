import React from "react";
import mapboxgl from 'mapbox-gl';
import './Map.css'

mapboxgl.accessToken = 'pk.eyJ1IjoiamFzb25jZDMxIiwiYSI6ImNrZnNydTM3bzBwdjEyd25weWZ1eDdwNmIifQ.Wu020OyV0VPIxgxMO905Ig';

class Map extends React.Component {
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
            <div ref={el => this.mapContainer = el} className="mapContainer" 
            style={{
            position: 'absolute',
            top: 65,
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            height: '100vh',
     }}/>
        </div>
    )
    }
}
export default Map;