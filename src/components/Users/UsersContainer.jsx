import React from 'react';
import {connect} from 'react-redux';
import { follow, setUsers, unfollow,setCurrentPage,setTotalCount,setIsFetching,setFollowInProgress,getUsersThunkCreator} from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = (state)=>{
    return{
        users:state.users.users,
        pageSize:state.users.pageSize,
        totalCount:state.users.totalCount,
        currentPage:state.users.currentPage,
        isFetching:state.users.isFetching,
        followInProgress:state.users.followInProgress
    }
}
let UsersContainer = connect(mapStateToProps,{
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setIsFetching,
    setFollowInProgress,
    getUsers:getUsersThunkCreator
})(Users);
export default UsersContainer;