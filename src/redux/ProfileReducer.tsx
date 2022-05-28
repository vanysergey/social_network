import {ActionsTypes, postsDataType, profilePageType} from './State';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'


const ProfileReducer = (State: profilePageType, action: ActionsTypes) => {
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
export default ProfileReducer;
