import profileReducer,{ADD_POST,UPDATE_NEW_POST_CHANGE} from "./profileReducer";
import dialogsReducer,{ADD_MESSAGE,UPDATE_NEW_MESSAGE_TEXT} from "./dialogsReducer";
import navReducer from "./navReducer";

let store = {
    _callSubscriber(){
        console.log('no observers exists');
    },
    _state:{
        profile:{
            posts:[{id:1,message:'Hi, how are you?',likeCount:34},
            {id:2,message:"It's my first post",likeCount:56},
            {id:3,message:"It's my second post",likeCount:13}
            ],
            newPostText:'',          
        },
        dialogs:{
            messages:[{message:"Привет",id:1},{message:"Как дела?",id:2},{message:"Что нового?",id:3}],
            dialogs:[{id:1,name:"Slava"},{id:2,name:"Andrey"},{id:3,name:"Sasha"},{id:4,name:"Masha"},{id:5,name:"Sveta"}],
            newMessageText:'',
            _addMessage(){
                if(this.newMessageText!==""){
                    this.messages.push({message:this.newMessageText,id:4})
                    this.newMessageText ='';
                    store._callSubscriber(store._state);
                }
            },
            _updateNewMessageText(newText){
                this.newMessageText = newText;
                store._callSubscriber(store._state);
            },
        },
        nav:{
            friends:[{photo_url:"/img/friend.jpg",name:"Dwain Rock"},{photo_url:"/img/friend.jpg",name:"Johnson"},
            {photo_url:"/img/friend.jpg",name:"Johnson"}],
        },
    }, 

        subscribe(observer){
        this._callSubscriber = observer;
    },
        getState(){
            return this._state;
        },
        dispatch(action){
            store._state.profile = profileReducer(store._state.profile,action);
            store._state.dialogs = dialogsReducer(store._state.dialogs,action);
            store._state.nav = navReducer(store._state.nav,action);
            console.log(this._state);
            this._callSubscriber(store._state);           
        }
          
}
export const addPostActionCreator = ()=>({type:ADD_POST});
export const updateNewPostTextActionCreator = (text)=>
({type:UPDATE_NEW_POST_CHANGE,newText: text});
export const addMessageActionCreator = ()=>({type:ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text)=>
({type:UPDATE_NEW_MESSAGE_TEXT,newText:text});

export default store;