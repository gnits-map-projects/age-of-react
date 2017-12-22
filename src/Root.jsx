import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import App from './App';
import Second from './Second';


class Root extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">App</Link></li>
                        <li><Link to="/about">Second</Link></li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={App} />
                    <Route path="/about" component={Second} />
                </div>
            </Router>
        )
    }
}


export default Root;
