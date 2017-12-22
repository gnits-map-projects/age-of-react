import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App mapCenter={[17.3943459,78.4244423]} />, document.getElementById('root'));
registerServiceWorker();
