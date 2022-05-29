import React from 'react';
import {ActionsTypes, dialogsPageType, messagesDataType} from './State';

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'

const DialogsReducer = (State: dialogsPageType, action: ActionsTypes) => {
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