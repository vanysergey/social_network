import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type ProfileType = {
    postsData: Array<postsDataType>
    addPost:()=> void
    newPostText: string
    updateNewPostText:(newText:string)=> void
}
type postsDataType = {
    id: number,
    message: string,
    like: number,
    dislike: number
}
export const Profile = (props: ProfileType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost}

                     callback2={props.updateNewPostText}
                     postsData={props.postsData}
                     newPostText={props.newPostText}/>
        </div>
    );
};

