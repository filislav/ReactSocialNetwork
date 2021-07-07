import React from 'react';
import {connect} from 'react-redux';
import { follow, setUsers, unfollow ,setCurrentPage,setTotalCount,setIsFetching} from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = (state)=>{
    return{
        users:state.users.users,
        pageSize:state.users.pageSize,
        totalCount:state.users.totalCount,
        currentPage:state.users.currentPage,
        isFetching:state.users.isFetching
    }
}
// let mapDispatchToProps = (dispatch)=>{
//     return{
//         follow:(userId)=>{
//             dispatch(followAC(userId));
//         },
//         unfollow:(userId)=>{
//             dispatch(unfollowAC(userId));
//         },
//         setUsers:(users)=>{
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage:(pageNumber)=>{
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalCount:(totalCount)=>{
//             console.log(totalCount);
//             dispatch(setTotalCountAC(totalCount));
//         },
//         setIsFetching:(isFetching)=>{
//             dispatch(setIsFetchingAC(isFetching));
//         }
//     }
// }
let UsersContainer = connect(mapStateToProps,{
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setIsFetching
})(Users);
export default UsersContainer;