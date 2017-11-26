import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const waveRock = [17.4191667,78.3460251]

ReactDOM.render(<App position={waveRock} />, document.getElementById('root'));
registerServiceWorker();
