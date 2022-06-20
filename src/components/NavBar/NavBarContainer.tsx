import React from 'react';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {NavBar} from './NavBar';
import {Dispatch} from 'redux';

type sidebarType = {
    sidebar: Array<friendsType>
}
type friendsType = {
    id: number
    name: string
    avatar: string
}
type MapStatePropsType = sidebarType
type MapDispatchPropsType = {}

export type SidebarPropsType = MapDispatchPropsType & MapStatePropsType

let mapStateToProps = (state: AppStateType): sidebarType => {
    return {
        sidebar: state.sidebar.friends
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {}
}

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)
export default NavBarContainer