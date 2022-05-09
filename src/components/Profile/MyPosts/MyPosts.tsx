import React, {ChangeEvent, ChangeEventHandler, MouseEventHandler} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

type MyPostType = {
    postsData: Array<postsDataType>
    addPost: () => void
    callback2: (value: string) => void
    newPostText: string
}
type postsDataType = {
    id: number,
    message: string,
    like: number,
    dislike: number
}

export const MyPosts = (props: MyPostType) => {
    let postsElements = props.postsData.map(p => <Post key={p.id} message={p.message} id={p.id} likeCount={p.like}
                                                       dislikeCount={p.dislike}/>)

       let addPost = () => {
        props.addPost()
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget) {
            props.callback2(e.currentTarget.value)
        }
    }

    return (
        <div className={s.descriptionBlock}>
            <h3>My post</h3>
            <div className={s.posts}>
                <div><textarea
                    // ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}/></div>
                <div className={s.descriptionBlock}>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
};

