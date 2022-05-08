import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {NavBar} from './components/NavBar/NavBar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, } from 'react-router-dom';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {Music} from './components/Music/Music';

type AppType = {
    State: RootStateType,
    addPost: () => void,
    updateNewPostText: (newText: string) => void,
    addMessage: (Message: string) => void,
}
type RootStateType = {
    profilePage: profilePageType
    messagesPage: messagesPageType
    sidebar: sidebarType
}
type postsDataType = {
    id: number
    message: string
    like: number
    dislike: number
}
type messagesDataType = {
    id: number
    message: string
}
type dialogsDataType = {
    id: number
    name: string
    avatar: string
}
type friendsType = {
    id: number
    name: string
    avatar: string
}
type sidebarType = {
    friends: Array<friendsType>
}
type profilePageType = {
    postsData: Array<postsDataType>
    newPostText: string
}
type messagesPageType = {
    messagesData: Array<messagesDataType>,
    dialogsData: Array<dialogsDataType>
}

const App: React.FC<AppType> = (props: AppType) => {
    let dialogsData = props.State.messagesPage.dialogsData
    let messagesData = props.State.messagesPage.messagesData
    let postsData = props.State.profilePage.postsData
    let sidebar = props.State.sidebar.friends
    let newPostText = props.State.profilePage.newPostText


    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <NavBar sidebar={sidebar}/>

                <div className="app-wrapper-content">
                    <Route /*exact*/ path="/profile" render={() =>
                        <Profile
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                            postsData={postsData}
                            newPostText={newPostText}/>}/>
                    <Route /*exact*/ path="/dialogs/" render={() =>
                        <Dialogs
                            addMessage={props.addMessage}
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
