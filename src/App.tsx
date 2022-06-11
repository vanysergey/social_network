import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {NavBar} from './components/NavBar/NavBar';
import {Profile} from './components/Profile/Profile';
import {BrowserRouter, Route,} from 'react-router-dom';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import {Music} from './components/Music/Music';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import store from './redux/redux-store';


const App = () => {

    // const State = props.store.getState();

    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <NavBar sidebar={store.getState().sidebar.friends}/>

                <div className="app-wrapper-content">

                    <Route /*exact*/ path="/profile" render={() =>
                        <Profile/>}
                    />
                    <Route /*exact*/ path="/dialogs/" render={() =>
                        <DialogsContainer/>}
                    />
                    <Route /*exact*/ path="/news" render={() => <News/>}/>
                    <Route /*exact*/ path="/music" render={() => <Music/>}/>
                    <Route /*exact*/ path="/settings" render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
