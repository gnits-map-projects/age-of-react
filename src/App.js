import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, TileLayer, Polyline } from 'react-leaflet'
import request from 'superagent';

class App extends React.Component {
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
    const onSucess = (val) => { this.setState({ user: val.body.login })};
    promise.then(onSucess);
  }

  render() {
    return (
      <Map center={this.props.mapCenter} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {
          Object.keys(this.state.locations).map(
            (location) => <Marker key={location} position={this.state.locations[location]} />)
        }
        <Polyline positions={Object.values(this.state.locations)} />
      </Map>
    );
  }
};

App.propTypes = {
  mapCenter: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default App;
