import {combineReducers, legacy_createStore} from 'redux';
import ProfileReducer from './ProfileReducer';
import DialogsReducer from './DialogsReducer';
import SidebarReducer from './SidebarReducer';

export type ReducesType = ReturnType<typeof reduces>

let reduces = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer
})
export let store = legacy_createStore(reduces)


// export default Store;