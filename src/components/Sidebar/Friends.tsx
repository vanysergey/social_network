import React from 'react';
import s from '../Dialogs/Dialogs.module.css';

type FriendsType = {
    id: number
    name: string
    avatar: string
}
export const Friends = (props: FriendsType) => {
    return (
        <div className={s.friends}>
            <img className={s.avatar} src={props.avatar} alt="avatar"/> {props.name}

        </div>
    );
};

