import React from 'react';
import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {StoreType} from '../../redux/State';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type ProfileType = {
    store: StoreType
}

export const Profile = () => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
};

