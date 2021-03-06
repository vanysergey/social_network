import DialogsReducer, {AddMessageAC, UpdateNewMessageActionAC} from './DialogsReducer';
import ProfileReducer, {AddPostAC, UpdateNewPostTextActionAC} from './ProfileReducer';
import SidebarReducer from './SidebarReducer';

type postsDataType = {
    id: number
    message: string
    like: number
    dislike: number
}
type messagesDataType = {
    id: number
    message: string
}
type dialogsDataType = {
    id: number
    name: string
    avatar: string
}
type friendsType = {
    id: number
    name: string
    avatar: string
}
type sidebarType = {
    friends: Array<friendsType>
}
type profilePageType = {
    postsData: Array<postsDataType>
    newPostText: string
}
type dialogsPageType = {
    messagesData: Array<messagesDataType>,
    dialogsData: Array<dialogsDataType>,
    newMessageText: string
}
type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    sidebar: sidebarType
}
type StoreType = {
    _State: RootStateType
    _rerenderEntireTree: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageType
    | UpdateNewMessageActionAType
type AddPostActionType = ReturnType<typeof AddPostAC>
type UpdateNewPostTextActionType = ReturnType<typeof UpdateNewPostTextActionAC>
type AddMessageType = ReturnType<typeof AddMessageAC>
type UpdateNewMessageActionAType = ReturnType<typeof UpdateNewMessageActionAC>


const store: StoreType = {

    _State: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', like: 35, dislike: 3},
                {id: 2, message: 'It\'s my first post', like: 30, dislike: 2},
                {id: 3, message: 'It\'s my second post', like: 40, dislike: 1},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messagesData: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Hi'},
                {
                    id: 3,
                    message: 'Yooo. None of the OTHER CSS border properties!'
                },
                {id: 4, message: 'What`s up.'},

            ],
            newMessageText: '',
            dialogsData: [
                {
                    id: 1,
                    name: 'Sergey',
                    avatar: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'
                },
                {
                    id: 2,
                    name: 'Tonya',
                    avatar: 'https://e7.pngegg.com/pngimages/674/524/png-clipart-professional-computer-icons-avatar-job-avatar-heroes-computer.png'
                },
                {
                    id: 3,
                    name: 'Lexa',
                    avatar: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'
                },
                {
                    id: 4,
                    name: 'Pasha',
                    avatar: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'
                },
                {
                    id: 5,
                    name: 'Igor',
                    avatar: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'
                },
                {
                    id: 6,
                    name: 'Artyr',
                    avatar: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'
                }
            ]
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Tonya',
                    avatar: 'https://e7.pngegg.com/pngimages/674/524/png-clipart-professional-computer-icons-avatar-job-avatar-heroes-computer.png'
                },
                {
                    id: 2,
                    name: 'Pasha',
                    avatar: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'
                },
                {
                    id: 3,
                    name: 'Igor',
                    avatar: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'
                },
            ]
        }
    },

    _rerenderEntireTree() {
        console.log('state changed')
    },
    subscribe(callback) {
        this._rerenderEntireTree = callback
    },
    getState() {
        return this._State
    },

    dispatch(action) {
        this._State.profilePage = ProfileReducer(this._State.profilePage, action)
        this._State.dialogsPage = DialogsReducer(this._State.dialogsPage, action)
        this._State.sidebar = SidebarReducer(this._State.sidebar, action)

        this._rerenderEntireTree()
    }
}



