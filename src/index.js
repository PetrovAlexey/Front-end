import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import createStore from './store'
import MainRouter from './routes/index'

const store = createStore();

ReactDOM.render(
    <Provider store = {store}>
    <BrowserRouter>
    <MainRouter/>
    
    </BrowserRouter>
    </Provider>
    , document.getElementById('root'));


