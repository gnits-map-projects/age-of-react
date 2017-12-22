import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import App from './App';
import GitMe from './GitMe';


class Root extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Me</Link></li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={App} />
                    <Route path="/about" component={GitMe} />
                </div>
            </Router>
        )
    }
}


export default Root;
