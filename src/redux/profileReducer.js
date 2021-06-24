export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_CHANGE = 'UDATE-NEW-POST-CHANGE';

let initialState = {
    posts:[{id:1,message:'Hi, how are you?',likeCount:34},
    {id:2,message:"It's my first post",likeCount:56},
    {id:3,message:"It's my second post",likeCount:13}
    ],
    newPostText:'',          
};

export const profileReducer = (state = initialState,action)=>{
    let stateCopy = {...state}; //копия создается потому что если мы изменили state то connect сравнивает измен.state с измен.state и
    //ничего не перерисовывает.
    switch(action.type){
        case ADD_POST:{
            debugger;
            if(state.newPostText!==''){
                stateCopy.posts = [...state.posts];
                stateCopy.posts.push({id:4,message:state.newPostText,likeCount:22});
                stateCopy.newPostText = '';
            }
            break;
        }
        case UPDATE_NEW_POST_CHANGE:{
            stateCopy.newPostText = action.newText;
            break;
        }
        default:{
            return state;
        }
    }
    return stateCopy;
}
export const addPostActionCreator = ()=>({type:ADD_POST});
export const updateNewPostTextActionCreator = (text)=>
({type:UPDATE_NEW_POST_CHANGE,newText: text});
export default profileReducer;