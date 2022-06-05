import React from 'react';
import {ActionsTypes, dialogsPageType, messagesDataType} from './State';

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

let initialState = {
    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {
            id: 3,
            message: 'Yooo. None of the OTHER CSS border properties!'
        },
        {id: 4, message: 'What`s up.'},

    ],
    newMessageText: '',
    dialogsData: [
        {
            id: 1,
            name: 'Sergey',
            avatar: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'
        },
        {
            id: 2,
            name: 'Tonya',
            avatar: 'https://e7.pngegg.com/pngimages/674/524/png-clipart-professional-computer-icons-avatar-job-avatar-heroes-computer.png'
        },
        {
            id: 3,
            name: 'Lexa',
            avatar: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'
        },
        {
            id: 4,
            name: 'Pasha',
            avatar: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'
        },
        {
            id: 5,
            name: 'Igor',
            avatar: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'
        },
        {
            id: 6,
            name: 'Artyr',
            avatar: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'
        }
    ]
}

const DialogsReducer = (State: dialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: messagesDataType = {
                id: new Date().getTime(), message: State.newMessageText
            };
            State.messagesData.push(newMessage);
            State.newMessageText = ('');
            return State;
        case UPDATE_NEW_MESSAGE:
            State.newMessageText = action.newMessage;
            return State;
        default:
            return State;
    }

};

export const AddMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}
export const UpdateNewMessageActionAC = (Message: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        newMessage: Message
    } as const
}

export default DialogsReducer;