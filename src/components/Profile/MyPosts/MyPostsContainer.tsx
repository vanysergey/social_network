import React from 'react';
import {AddPostAC, UpdateNewPostTextActionAC} from '../../../redux/ProfileReducer';
import {StoreType} from '../../../redux/State';
import {MyPosts} from './MyPosts';

type MyPostsContainer = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsContainer) => {

    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(AddPostAC())
    }

    const UpdateNewPostText = (text: string) => {
        props.store.dispatch(UpdateNewPostTextActionAC(text))
    }

    return (
        <MyPosts
            addPost={addPost}
            UpdateNewPostText={UpdateNewPostText}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
        />
    );
};

