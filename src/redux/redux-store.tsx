import {combineReducers, legacy_createStore} from 'redux';
import ProfileReducer from './ProfileReducer';
import DialogsReducer from './DialogsReducer';
import SidebarReducer from './SidebarReducer';


let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
let store = legacy_createStore(rootReducer)

export type storeType = typeof store


export default store;