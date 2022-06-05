import React from 'react';
import {AddMessageAC, UpdateNewMessageActionAC} from '../../redux/DialogsReducer';
import {StoreType} from '../../redux/State';
import {Dialogs} from './Dialogs';

type DialogsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsType) => {

    let State = props.store.getState()

    const addMessage = () => {
        props.store.dispatch(AddMessageAC())
    }

    const onNewMessageChange = (Message: string) => {
        props.store.dispatch(UpdateNewMessageActionAC(Message))
    }

    return (
        <Dialogs
            dialogsData={State.dialogsPage.dialogsData}
            messagesData={State.dialogsPage.messagesData}
            newMessageText={State.dialogsPage.newMessageText}
            addMessage={addMessage}
            updateNewMessageAction={onNewMessageChange}
        />
    );
};

