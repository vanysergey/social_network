import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './Message/DialogItem';
import {Message} from './Message/Message';


type DialogsType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
    addMessage: (message: string) => void
}

type dialogsDataType = {
    id: number,
    name: string
    avatar: string
}
type messagesDataType = {
    id: number,
    message: string
}

export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>)
    let messagesElements = props.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id}/>)
    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    const addMessage = () => {

        if (newMessageElement.current) {
            props.addMessage(newMessageElement.current.value)
            newMessageElement.current.value = ''
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
                    <textarea ref={newMessageElement} className={s.textarea}></textarea>
                    <div>
                        <button onClick={addMessage} className={s.sendMessage}>Send message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

