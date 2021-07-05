import React from 'react';
import {connect} from 'react-redux';
import { followAC, setUsersAC, unfollowAC ,setCurrentPageAC,setTotalCountAC} from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = (state)=>{
    return{
        users:state.users.users,
        pageSize:state.users.pageSize,
        totalCount:state.users.totalCount,
        currentPage:state.users.currentPage
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId));
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId));
        },
        setUsers:(users)=>{
            console.log(users);
            dispatch(setUsersAC(users));
            console.log('setUsers');
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalCount:(totalCount)=>{
            console.log(totalCount);
            dispatch(setTotalCountAC(totalCount));
        }
    }
}
let UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);
export default UsersContainer;