import React from 'react';
import {AddMessageAC, DialogsReducerType, UpdateNewMessageActionAC} from '../../redux/DialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';


type MapStatePropsType = DialogsReducerType
type MapDispatchPropsType = {
    addMessage: () => void
    onNewMessageChange: (Message: string) => void
}

export type DialogsPropsType = MapDispatchPropsType & MapStatePropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: () => {
            dispatch(AddMessageAC())
        },
        onNewMessageChange: (Message: string) => {
            dispatch(UpdateNewMessageActionAC(Message))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;