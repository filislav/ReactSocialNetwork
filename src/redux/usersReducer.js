const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState={
    users:[
        {id:1,photoUrl:'img/avatar.png',followed:false,fullName:'Dmitry K.',location:{country:'Russia',city:'Moscow'},status:"I'am here"},
        {id:2,photoUrl:'img/avatar.png',followed:true,fullName:'Mickhail S.',location:{country:'Russia',city:'Samara'},status:"Stylish"},
        {id:3,photoUrl:'img/avatar.png',followed:true,fullName:'Vadim S.',location:{country:'USA',city:'Los Angeles'},status:"Listen the music..."}
    ]
};

let usersReducer = (state=initialState,action)=>{
    switch(action.type){
        case FOLLOW :{
            return{
                ...state,
                users:state.users.map((u)=>{
                    if(u.id === action.userId){
                        return {...u,followed:true};
                    }
                    return u})
            }
        }
        case UNFOLLOW :{
            return{
                ...state,
                users:state.users.map((u)=>{
                    if(u.id === action.userId){
                        return{...u,followed:false};
                    }
                    return u})
            }
        }
        case SET_USERS:{
            return {...state, users:[...state.users,...action.users]};
        }
    }
    return state;
}
export let followAC = (userId)=>({type:FOLLOW,userId});
export let unfollowAC = (userId)=>({type:UNFOLLOW,userId});
export const setUsersAC = (users)=>({type:SET_USERS,users});
export default usersReducer;