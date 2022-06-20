import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './Message/DialogItem';
import {Message} from './Message/Message';
import {DialogsPropsType} from './DialogsContainer';


export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsData.map(d => <DialogItem
        key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>)
    let messagesElements = props.messagesData.map(m => <Message
        key={m.id} message={m.message} id={m.id}/>)

    const addMessage = () => {
        props.addMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            const Message = e.currentTarget.value
            props.onNewMessageChange(Message)
        }
    }
    const onKeyPressEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            props.addMessage()
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
                        onChange={onNewMessageChange}
                        value={props.newMessageText}
                        className={s.textarea}
                        onKeyPress={onKeyPressEnter}/>
                    <div>
                        <button onClick={addMessage} className={s.sendMessage}>Send message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

