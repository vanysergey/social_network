import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {DialogItem} from '../../Dialogs/Message/DialogItem';

type MyPostType = {
    postsData: Array<postsDataType>}

type postsDataType = {
    id: number,
    message: string,
    like: number,
    dislike: number
}
/*const postsData = [
    {id: 1, message: 'Hi, how are you?', like: 35, dislike: 3},
    {id: 2, message: 'It\'s my first post', like: 30, dislike: 2},
    {id: 3, message: 'It\'s my second post', like: 40, dislike: 1},
]*/


export const MyPosts = (props: MyPostType) => {
    let postsElements = props.postsData.map(p => <Post message={p.message} id={p.id} likeCount={p.like}
                                                       dislikeCount={p.dislike}/>)
    return (
        <div className={s.descriptionBlock}>
            <h3>My post</h3>
            <div className={s.posts}>
                <div><textarea></textarea></div>
                <div className={s.descriptionBlock}>
                    <button>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
};

