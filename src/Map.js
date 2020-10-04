import React from "react";
import mapboxgl from 'mapbox-gl';
import './Map.css'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

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
            top: 30,
            bottom: 0,
            width: '100%',
            height: '90vh',
     }}/>
        </div>
    )
    }
}
export default Map;