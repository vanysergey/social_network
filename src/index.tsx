import React from 'react';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import {Provider,} from './StoreContext';


const rerenderEntireTree = () => {


    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)


