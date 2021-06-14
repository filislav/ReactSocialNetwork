export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_CHANGE = 'UDATE-NEW-POST-CHANGE';

export const profileReducer = (state,action)=>{
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

export default profileReducer;