import React from 'react';
import {NavLink} from 'react-router-dom';
import s from '../Dialogs.module.css';


type DialogItemType = {
    name: string
    id: number
    avatar: string
}
export const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                <img className={s.avatar} src={props.avatar} alt="avatar"/> {props.name} </NavLink>
        </div>
    )
}

/*// + ' ' + s.active*/