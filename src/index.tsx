import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, StoreType} from './redux/State';

const rerenderEntireTree = () => {

    ReactDOM.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>,
       document.getElementById('root')
    );
}
//rerenderEntireTree(State)
store.subscribe(rerenderEntireTree)

