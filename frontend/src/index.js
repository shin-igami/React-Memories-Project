import React from 'react';
import ReactDom from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './App'

ReactDom.render(
    <Provider store = {createStore(reducers, compose(applyMiddleware(thunk)))}>
        <App />
    </Provider>,
     document.getElementById('root'));