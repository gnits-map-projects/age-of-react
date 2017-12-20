import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import KitchenSink from './components/kitchen-sink/KitchenSink';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<KitchenSink />, document.getElementById('root'));
registerServiceWorker();
