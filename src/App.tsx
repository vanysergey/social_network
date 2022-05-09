import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {NavBar} from './components/NavBar/NavBar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route,} from 'react-router-dom';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {Music} from './components/Music/Music';
import {StoreType} from './redux/State';


type AppType = {
    store: StoreType,
}

const App: React.FC<AppType> = (props) => {

    const State = props.store.getState();
    const dialogsData = State.messagesPage.dialogsData
    const messagesData = State.messagesPage.messagesData
    const postsData = State.profilePage.postsData
    const sidebar = State.sidebar.friends
    const newPostText = State.profilePage.newPostText

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <NavBar sidebar={sidebar}/>

                <div className="app-wrapper-content">

                    <Route /*exact*/ path="/profile" render={() =>
                        <Profile
                            addPost={props.store.addPost.bind(props.store)}
                            updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                            postsData={postsData}
                            newPostText={newPostText}/>}/>
                    <Route /*exact*/ path="/dialogs/" render={() =>
                        <Dialogs
                            addMessage={props.store.addMessage.bind(props.store)}
                            dialogsData={dialogsData}
                            messagesData={messagesData}/>}/>
                    <Route /*exact*/ path="/news" render={() => <News/>}/>
                    <Route /*exact*/ path="/music" render={() => <Music/>}/>
                    <Route /*exact*/ path="/settings" render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
