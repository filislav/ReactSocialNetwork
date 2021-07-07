const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'SET_TOGGLE_FETCHING';

let initialState={   
    users:[],
    pageSize:5,
    totalCount:0,
    currentPage:3,
    isFetching:true
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
    }
    return state;
}
export let follow = (userId)=>({type:FOLLOW,userId});
export let unfollow = (userId)=>({type:UNFOLLOW,userId});
export const setUsers = (users)=>({type:SET_USERS,users});
export const setCurrentPage = (currentPage)=>({type:SET_CURRENT_PAGE,currentPage});
export const setTotalCount = (totalCount)=>({type:SET_TOTAL_COUNT,totalCount});
export const setIsFetching = (isFetching)=>({type:TOGGLE_IS_FETCHING,isFetching});
export default usersReducer;