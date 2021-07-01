import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { createStore } from 'redux';
import rootReducer from './store/modules'
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

