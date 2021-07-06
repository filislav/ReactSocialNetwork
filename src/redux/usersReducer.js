const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

let initialState={   
    users:[],
    pageSize:5,
    totalCount:0,
    currentPage:3
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
            state.users=[];
            return {...state, users:[...state.users,...action.users]};
        }
        case SET_CURRENT_PAGE:{
            return{...state, currentPage:action.currentPage};
        }
        case SET_TOTAL_COUNT:{
            
            return{...state,totalCount:action.totalCount};
        }
    }
    return state;
}
export let followAC = (userId)=>({type:FOLLOW,userId});
export let unfollowAC = (userId)=>({type:UNFOLLOW,userId});
export const setUsersAC = (users)=>({type:SET_USERS,users});
export const setCurrentPageAC = (currentPage)=>({type:SET_CURRENT_PAGE,currentPage});
export const setTotalCountAC = (totalCount)=>({type:SET_TOTAL_COUNT,totalCount});
export default usersReducer;