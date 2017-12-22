import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, TileLayer, Polyline } from 'react-leaflet'
import request from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: {},
    };
  }

  componentDidMount() {
    request
      .get("http://localhost:9000/locations")
      .then(
        (response) => {
          // response.body will be the returned data from your play app, which is an array of objects
          // I kept the data as object with "place" as the key, and [lat,longs] as value.
          // following code converts array of objects into the format which my component is accepting.
          console.log("response is --> ", response.body);

          const newLocations = response.body.reduce((acc, value, idx) => {
            console.log("value " + idx + " of response --> ", value);

            const {name, location: {latitude, longitude}} = value;

            return {
              ...acc,
              [name]: [latitude, longitude]
            };
          }, {});

          /*
            // Above implementation is same as following
            let newLocations = {};
            for(let i=0; i<response.body.length; i++){
              const value = response.body[i];
              newLocations[value.name] = [value.location.latitude, value.location.longitude]
            }
          */

          /*
            const arr = [1, 2, 3];

            // Array.prototype.reduce
            arr.reduce((sum, value) => sum + value, 0);  // 6

            // is same as
            const sum = 0;
            for (let i=0; i<arr.length; i++) {
              sum += arr[i];
            }
          */

          this.setState({ locations: newLocations });
        },
        (error) => console.log("locations are not found", error));
  }

  render() {
    return (
      <Map center={[17.4118166, 78.3967619]} zoom={12}>
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


export default App;
