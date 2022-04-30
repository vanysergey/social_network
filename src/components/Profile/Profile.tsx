import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type profilePageElementType = {
    postsData: Array<postsDataType>
}
type postsDataType = {
    id: number,
    message: string,
    like: number,
    dislike: number
}
export const Profile = (props: profilePageElementType) => {
    /* const postsData = [
         {id: 1, message: 'Hi, how are you?', like: 35, dislike: 3},
         {id: 2, message: 'It\'s my first post', like: 30, dislike: 2},
         {id: 3, message: 'It\'s my second post', like: 40, dislike: 1},
     ]
 */  //вынесли из MyPost сюда, а потом уносим в Арр
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
};

