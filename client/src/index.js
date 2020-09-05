import React from 'react';
import ReactDOM from 'react-dom';
import Browserrouter, { Route } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(

    // Wrapping ARouter around App
    <Router>
        <App />
    </Router>

, 
document.getElementById('root'));
