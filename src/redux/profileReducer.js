export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_CHANGE = 'UDATE-NEW-POST-CHANGE';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts:[{id:1,message:'Hi, how are you?',likeCount:34},
    {id:2,message:"It's my first post",likeCount:56},
    {id:3,message:"It's my second post",likeCount:13}
    ],
    newPostText:'',
    profile:{fullName:'slava',photos:{large:'img/avatar.png'}}         
};

export const profileReducer = (state = initialState,action)=>{
    let stateCopy = {...state}; //копия создается потому что если мы изменили state то connect сравнивает измен.state с измен.state и
    //ничего не перерисовывает.
    switch(action.type){
        case ADD_POST:{
            if(state.newPostText!==''){
                stateCopy.posts = [...state.posts,{id:4,message:state.newPostText,likeCount:22}]; //так добавляется новый элемент в текущий массив
                //если нужно добавить элемент в начало массива то [{id:4,message:state.newPostText},likeCount:22},...state.posts]
                stateCopy.newPostText = '';
            }
            break;
        }
        case UPDATE_NEW_POST_CHANGE:{
            stateCopy.newPostText = action.newText;
            break;
        }
        case SET_USER_PROFILE:{
           stateCopy.profile = action.profile;
           break;
        }
        default:{
            return state;
        }
    }
    return stateCopy;
}
export const addPost = ()=>({type:ADD_POST});
export const updateNewPostText = (text)=>
({type:UPDATE_NEW_POST_CHANGE,newText: text});
export const setUserProfile = (profile)=>({type:SET_USER_PROFILE,profile:profile});
export default profileReducer;