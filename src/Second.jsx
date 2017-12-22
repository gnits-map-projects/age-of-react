import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, TileLayer, Polyline } from 'react-leaflet'
import request from 'superagent';

class Second extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      locations: {
        "gnit": [17.4118166, 78.3967619],
        "charminar": [17.3615636, 78.4724758],
      }
    };
  }

  componentDidMount() {
    const promise = request.get("https://api.github.com/users/kra3");
    const onSucess = (val) => { this.setState({ user: val.body.login }) };
    promise.then(onSucess);
    request
      .get("http://my.bookapp.com:9000/locations")
      .then(console.log);
  }

  render() {
    return (
      <Map center={[17.3615636, 78.4724758]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {
          Object.keys(this.state.locations).map(
            (location) => <Marker key={location} position={this.state.locations[location]} />)
        }
      </Map>
    );
  }
};


export default Second;
