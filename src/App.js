import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const App = (props) => (
  <Map center={props.position} zoom={15}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    <Marker position={props.position}>
      <Popup>
        <span>
          Hej, we are here!<br /> Now where is Charminar?.
        </span>
      </Popup>
    </Marker>
  </Map>
);

App.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default App;
