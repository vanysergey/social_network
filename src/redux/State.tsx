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
}
type messagesPageType = {
    messagesData: Array<messagesDataType>,
    dialogsData: Array<dialogsDataType>
}
type RootStateType = {
    profilePage: profilePageType
    messagesPage: messagesPageType
    sidebar: sidebarType
}


let State: RootStateType = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi, how are you?', like: 35, dislike: 3},
            {id: 2, message: 'It\'s my first post', like: 30, dislike: 2},
            {id: 3, message: 'It\'s my second post', like: 40, dislike: 1},
        ]
    },
    messagesPage: {
        messagesData: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'Yooo. None of the OTHER CSS border properties (which you will learn more about in the next chapters) will have ANY effect unless the border-style property is set!'},
            {id: 4, message: 'What`s up.'},
        ],
        dialogsData: [
            {id: 1, name: 'Sergey', avatar:'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'},
            {id: 2, name: 'Tonya', avatar:'https://e7.pngegg.com/pngimages/674/524/png-clipart-professional-computer-icons-avatar-job-avatar-heroes-computer.png'},
            {id: 3, name: 'Lexa', avatar:'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'},
            {id: 4, name: 'Pasha', avatar:'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'},
            {id: 5, name: 'IIIIgooor', avatar:'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'},
            {id: 6, name: 'Artyr', avatar:'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'}
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Tonya', avatar: 'https://e7.pngegg.com/pngimages/674/524/png-clipart-professional-computer-icons-avatar-job-avatar-heroes-computer.png'},
            {id: 2, name: 'Pasha', avatar: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'},
            {id: 3, name: 'IIIIgooor', avatar: 'https://w7.pngwing.com/pngs/165/652/png-transparent-businessperson-computer-icons-avatar-avatar-heroes-public-relations-business.png'},
        ]
    }
}
export default State;