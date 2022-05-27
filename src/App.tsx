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
    const messagesPage = State.messagesPage
    const profilePage = State.profilePage
    const sidebar = State.sidebar.friends


    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <NavBar sidebar={sidebar}/>

                <div className="app-wrapper-content">

                    <Route /*exact*/ path="/profile" render={() =>
                        <Profile

                            dispatch={props.store.dispatch.bind(props.store)}
                            profilePage={profilePage}

                        />}/>
                    <Route /*exact*/ path="/dialogs/" render={() =>
                        <Dialogs
                            dispatch={props.store.dispatch.bind(props.store)}
                            messagesPage={messagesPage}

                        />}/>
                    <Route /*exact*/ path="/news" render={() => <News/>}/>
                    <Route /*exact*/ path="/music" render={() => <Music/>}/>
                    <Route /*exact*/ path="/settings" render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
