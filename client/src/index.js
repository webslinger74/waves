import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import '../public/resources/css/styles.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
        <BrowserRouter>
        <Routes />
        </BrowserRouter>

, document.getElementById('root'));