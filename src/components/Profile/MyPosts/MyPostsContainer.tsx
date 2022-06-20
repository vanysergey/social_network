import React from 'react';
import {AddPostAC, ProfileReducerType, UpdateNewPostTextActionAC} from '../../../redux/ProfileReducer';
import {MyPosts} from './MyPosts';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';


type MapStatePropsType = ProfileReducerType
type MapDispatchPropsType = {
    addPost: () => void
    UpdateNewPostText: (text: string) => void
}
export type MyPostsPropsType = MapDispatchPropsType & MapStatePropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(AddPostAC())
        },
        UpdateNewPostText: (text: string) => {
            dispatch(UpdateNewPostTextActionAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer