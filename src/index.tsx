import React from 'react';
import './index.css';
import App from './App';
import {store} from './redux/redux-store';
import ReactDOM from 'react-dom';


const rerenderEntireTree = () => {

   
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)


