import {userAPI,followAPI} from './../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'SET_TOGGLE_FETCHING';
const TOGGLE_IS_FOLLOWING = 'SET_TOGGLE_FOLLOWING';

let initialState={   
    users:[],
    pageSize:5,
    totalCount:0,
    currentPage:3,
    isFetching:true,
    followInProgress:[]
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
        case TOGGLE_IS_FETCHING:{
            return{...state,isFetching:action.isFetching};
        }
        case TOGGLE_IS_FOLLOWING:{
            return{...state,followInProgress:action.followInProgress
                ?[...state.followInProgress,action.userId]
                :state.followInProgress.filter(id=>id!==action.userId)
            };
        }
    }
    return state;
}
export let followSuccess = (userId)=>({type:FOLLOW,userId});
export let unfollowSuccess = (userId)=>({type:UNFOLLOW,userId});
export const setUsers = (users)=>({type:SET_USERS,users});
export const setCurrentPage = (currentPage)=>({type:SET_CURRENT_PAGE,currentPage});
export const setTotalCount = (totalCount)=>({type:SET_TOTAL_COUNT,totalCount});
export const setIsFetching = (isFetching)=>({type:TOGGLE_IS_FETCHING,isFetching});
export const setFollowInProgress = (followInProgress,userId)=>({type:TOGGLE_IS_FOLLOWING,followInProgress,userId});

export const getUsersThunkCreator =(currentPage,pageSize)=>{ 
    return (dispatch)=>{ 
        dispatch(setIsFetching(true));
            userAPI.getUsers(currentPage,pageSize).then((data)=>{
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(54));//responce.data.totalCount);   
            });
        }
}
export const follow =(userId)=>{
    return (dispatch)=>{dispatch(setFollowInProgress(true,userId));
        followAPI.follow(userId).then(responce=>{
            if(responce.data.resultCode == 0){
                dispatch(followSuccess(userId));
            }
            dispatch(setFollowInProgress(false,userId));
        });
    }
}
export const unfollow =(userId)=>{
    return (dispatch)=>{dispatch(setFollowInProgress(true,userId));
        followAPI.unfollow(userId).then(responce=>{
            if(responce.data.resultCode == 0){
                dispatch(unfollowSuccess(userId));
            }
            dispatch(setFollowInProgress(false,userId));
        });
    }
}
export default usersReducer;