import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType} from './redux/State';

export const rerenderEntireTree = (State:RootStateType) => {


    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}


