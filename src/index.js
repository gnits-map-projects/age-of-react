import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactForm from './components/ContactForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ContactForm />, document.getElementById('root'));
registerServiceWorker();
