import React from 'react';
import {ActionsTypes} from './State';

export type friendsType = {
    id: number
    name: string
    avatar: string
}
export type sidebarType = {
    friends: Array<friendsType>
}

export type SidebarReducerType = typeof initialState

let initialState = {
    friends: [
        {
            id: 1,
            name: 'Tonya',
            avatar: 'https://e7.pngegg.com/pngimages/674/524/png-clipart-professional-computer-icons-avatar-job-avatar-heroes-computer.png'
        },
        {
            id: 2,
            name: 'Pasha',
            avatar: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'
        },
        {
            id: 3,
            name: 'Igor',
            avatar: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'
        },
    ]
    //as Array<friendsType>
}
const SidebarReducer = (State: SidebarReducerType = initialState, action: ActionsTypes): SidebarReducerType => {

    return State
};

export default SidebarReducer;