import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import _Header from './html-head';

ReactDOM.render(
    <div><_Header/><App/></div>, document.getElementById('root'));
registerServiceWorker();
