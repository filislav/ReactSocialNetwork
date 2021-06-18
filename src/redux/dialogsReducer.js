export const ADD_MESSAGE = 'ADD-MESSAGE';
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messages:[{message:"Привет",id:1},{message:"Как дела?",id:2},{message:"Что нового?",id:3}],
    dialogs:[{id:1,name:"Slava"},{id:2,name:"Andrey"},{id:3,name:"Sasha"},{id:4,name:"Masha"},{id:5,name:"Sveta"}],
    newMessageText:'',
};

const dialogsReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_MESSAGE:{
            if(state.newMessageText!==""){
                state.messages.push({message:this.newMessageText,id:4})
                state.newMessageText ='';
            }
            break;
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            state.newMessageText = action.newText;
            break;
        }
        default:{
            return state;
        }
    }

    return state;
}
export const addMessageActionCreator = ()=>({type:ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text)=>
({type:UPDATE_NEW_MESSAGE_TEXT,newText:text});

export default dialogsReducer;