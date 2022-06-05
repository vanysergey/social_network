import {ActionsTypes, postsDataType, profilePageType} from './State';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', like: 35, dislike: 3},
        {id: 2, message: 'It\'s my first post', like: 30, dislike: 2},
        {id: 3, message: 'It\'s my second post', like: 40, dislike: 1},
    ],
    newPostText: ''
}

const ProfileReducer = (State: profilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: postsDataType = {
                id: new Date().getTime(),
                message: State.newPostText,
                like: 0,
                dislike: 0
            };
            State.postsData.push(newPost);
            State.newPostText = ('');
            return State;

        case UPDATE_NEW_POST:
            State.newPostText = action.newText;
            return State;
        default:
            return State;
    }

}

export const AddPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const UpdateNewPostTextActionAC = (text: string) => {
    return {
        type: 'UPDATE-NEW-POST',
        newText: text
    } as const
}

export default ProfileReducer;
