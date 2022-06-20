import React from 'react';
import {ActionsTypes} from './State';

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

type messagesDataType = {
    id: number
    message: string
}
type dialogsDataType = {
    id: number
    name: string
    avatar: string
}

export type DialogsReducerType = typeof initialState


let initialState = {
    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Yooo. None of the OTHER CSS border properties!'},
        {id: 4, message: 'What`s up.'},
    ] as Array<messagesDataType>,
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
    ] as Array<dialogsDataType>
}

const DialogsReducer = (State: DialogsReducerType = initialState, action: ActionsTypes): DialogsReducerType => {
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
        type: ADD_MESSAGE
    } as const
}
export const UpdateNewMessageActionAC = (Message: string) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessage: Message
    } as const
}

export default DialogsReducer;