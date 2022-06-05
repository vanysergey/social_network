import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {postsDataType} from '../../../redux/State';

type MyPostType = {
    UpdateNewPostText: (text: string) => void
    addPost: () => void
    postsData: Array<postsDataType>
    newPostText: string
}

export const MyPosts = (props: MyPostType) => {

    let postsElements = props.postsData.map(p => <Post
        key={p.id}
        message={p.message}
        id={p.id}
        likeCount={p.like}
        dislikeCount={p.dislike}/>)

    let addPost = () => {
        props.addPost()
    }
    const onKeyPressEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            props.addPost()
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            const text = e.currentTarget.value
            props.UpdateNewPostText(text)
        }
    }

    return (
        <div className={s.descriptionBlock}>
            <h3>My post</h3>
            <div className={s.posts}>
                <div><textarea
                    onChange={onPostChange}
                    onKeyPress={onKeyPressEnter}
                    value={props.newPostText}/></div>
                <div className={s.descriptionBlock}>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
};

