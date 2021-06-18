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
    switch(action.type){
        case ADD_POST:{
            if(state.newPostText!==''){
                state.posts.push({id:4,message:state.newPostText,likeCount:22})
                console.log(state.posts);
                state.newPostText = '';
            }
            break;
        }
        case UPDATE_NEW_POST_CHANGE:{
            state.newPostText = action.newText;
            break;
        }
        default:{
            return state;
        }
    }
    return state;
}
export const addPostActionCreator = ()=>({type:ADD_POST});
export const updateNewPostTextActionCreator = (text)=>
({type:UPDATE_NEW_POST_CHANGE,newText: text});
export default profileReducer;