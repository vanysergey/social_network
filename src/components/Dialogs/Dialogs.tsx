import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from './Message/DialogItem';
import {Message} from './Message/Message';


type DialogsType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
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

export const Dialogs = (props:DialogsType) => {
    let dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>)
    let messagesElements =props.messagesData.map (m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
              {/*  <DialogItem name={props.dialogsData[0].name} id={props.dialogsData[0].id}/>
                <DialogItem name={props.dialogsData[1].name} id={props.dialogsData[1].id}/>
                <DialogItem name={props.dialogsData[2].name} id={props.dialogsData[2].id}/>
                <DialogItem name={props.dialogsData[3].name} id={props.dialogsData[3].id}/>
                <DialogItem name={props.dialogsData[4].name} id={props.dialogsData[4].id}/>
                <DialogItem name={props.dialogsData[5].name} id={props.dialogsData[5].id}/>*/}
            </div>
            <div className={s.messages}>
                {messagesElements}
               {/* <Message message={props.messagesData[0].message} id={1}/>
                <Message message={props.messagesData[1].message} id={2}/>
                <Message message={props.messagesData[2].message} id={3}/>
                <Message message={props.messagesData[3].message} id={3}/>*/}
            </div>
        </div>
    );
};

