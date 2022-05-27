import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './Message/DialogItem';
import {Message} from './Message/Message';
import {ActionsTypes, AddMessageAC, messagesPageType, UpdateNewMessageActionAC} from '../../redux/State';


type DialogsType = {
    messagesPage: messagesPageType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.messagesPage.dialogsData.map(d => <DialogItem
        key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>)
    let messagesElements = props.messagesPage.messagesData.map(m => <Message
        key={m.id} message={m.message} id={m.id}/>)
    let newPostText = props.messagesPage.newMessageText


    const addMessage = () => {
        props.dispatch(AddMessageAC())
    }

    const onNewMesssageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            const Message = e.currentTarget.value
            props.dispatch(UpdateNewMessageActionAC(Message))
        }
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.addMessage}>
                    <textarea
                        onChange={onNewMesssageChange}
                        value={newPostText}
                        className={s.textarea}/>
                    <div>
                        <button onClick={addMessage} className={s.sendMessage}>Send message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

