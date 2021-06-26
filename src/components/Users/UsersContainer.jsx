import React from 'react';
import {connect} from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = (state)=>{
    return{
        users:state.users.users
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
            dispatch(setUsersAC(users));
            console.log('setUsers');
        }
    }
}
let UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);
export default UsersContainer;