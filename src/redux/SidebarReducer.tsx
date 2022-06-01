import React from 'react';
import {ActionsTypes, sidebarType} from './State';

let initailState = {
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
}
const SidebarReducer = (State: sidebarType = initailState, action: ActionsTypes) => {

    return State
};

export default SidebarReducer;