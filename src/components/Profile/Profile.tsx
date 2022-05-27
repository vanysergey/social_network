import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsTypes, profilePageType} from '../../redux/State';

type ProfileType = {
    profilePage: profilePageType
    dispatch: (action: ActionsTypes) => void

}

export const Profile = (props: ProfileType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch}
                     profilePage={props.profilePage}
            />
        </div>
    );
};

