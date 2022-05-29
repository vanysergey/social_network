import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {AddPostAC, UpdateNewPostTextActionAC} from '../../../redux/ProfileReducer';
import {ActionsTypes, profilePageType} from '../../../redux/State';

type MyPostType = {
    profilePage: profilePageType
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts = (props: MyPostType) => {
    let postsElements = props.profilePage.postsData.map(p => <Post
        key={p.id}
        message={p.message}
        id={p.id}
        likeCount={p.like}
        dislikeCount={p.dislike}/>)

    let addPost = () => {
        props.dispatch(AddPostAC())
    }
    const onKeyPressEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            addPost()
        }
    }


    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            const text = e.currentTarget.value
            props.dispatch(UpdateNewPostTextActionAC(text))
        }
    }

    return (
        <div className={s.descriptionBlock}>
            <h3>My post</h3>
            <div className={s.posts}>
                <div><textarea
                    onChange={onPostChange}
                    onKeyPress={onKeyPressEnter}
                    value={props.profilePage.newPostText}/></div>
                <div className={s.descriptionBlock}>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
};

