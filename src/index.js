import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Registration from './Registration';

ReactDOM.render(<Registration />, document.getElementById('root'));
registerServiceWorker();
