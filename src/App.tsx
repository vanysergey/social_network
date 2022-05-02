import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {NavBar} from './components/NavBar/NavBar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {Music} from './components/Music/Music';
import {addMessage, addPost, State, updateNewPostText} from './redux/State'

function App () {
 let dialogsData = State.messagesPage.dialogsData
    let messagesData = State.messagesPage.messagesData
    let postsData = State.profilePage.postsData
    let sidebar = State.sidebar.friends


    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <NavBar sidebar={sidebar}/>

                <div className="app-wrapper-content">
                   <Route /*exact*/ path="/profile" render={ ()=> <Profile  addPost={addPost} updateNewPostText={updateNewPostText} postsData={postsData} newPostText={State.profilePage.newPostText}/>}/>
                   <Route /*exact*/ path="/dialogs/" render={()=> <Dialogs  addMessage={addMessage} dialogsData={dialogsData} messagesData={messagesData}/>}/>
                    <Route /*exact*/ path="/news" render={()=> <News/>}/>
                    <Route /*exact*/ path="/music" render={()=> <Music/>}/>
                    <Route /*exact*/ path="/settings" render={()=> <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
