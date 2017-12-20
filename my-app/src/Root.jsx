import React from 'react';
import JoeyTribbiani from './JoeyTribbiani';
import Jumbotron from './Jumbotron';


class Root extends React.Component {
    render () {
        return (
            <div>
                <JoeyTribbiani who="Phoebe" />
                <Jumbotron />
            </div>
        );
    }
}


export default Root;
