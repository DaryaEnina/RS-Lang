import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <HashRouter basename="/">
                <App />
            </HashRouter>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
