export const ADD_MESSAGE = 'ADD-MESSAGE';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state,action) => {
    switch(action.type){
        case ADD_MESSAGE:{
            state._addMessage();
            break;
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            state._updateNewMessageText(action.newText);
            break;
        }
        default:{
            return state;
        }
    }

    return state;
}
export default dialogsReducer;