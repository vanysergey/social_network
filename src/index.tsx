import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, RootStateType, State, subscribe, updateNewPostText} from './redux/State';


const rerenderEntireTree = (State:RootStateType) => {

    ReactDOM.render(
        <App
            State={State}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
            addMessage={addMessage}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(State)
subscribe(rerenderEntireTree)

