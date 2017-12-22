import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const gnit = [17.4118166,78.3967619]

ReactDOM.render(<App position={gnit} />, document.getElementById('root'));
registerServiceWorker();
