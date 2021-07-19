import React,{Component} from 'react';
import UsersPresent from './UsersPresent';
import Preloader from './../Preloader/Preloader';
import {userAPI} from './../../api/api';

class Users extends Component{
   
    componentDidMount(){
        this.props.setIsFetching(true);
        userAPI.getUsers(this.props.currentPage,this.props.pageSize).then((data)=>{
        this.props.setIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalCount(54);//responce.data.totalCount);   
        });
    }
    onPageChanged = (p)=>{
        this.props.setCurrentPage(p);
        this.props.setIsFetching(true);
        userAPI.getUsers(p,this.props.pageSize).then((data)=>{   
        this.props.setIsFetching(false);
        this.props.setUsers(data.items);   
        });
    }
    render(){
        return(
            <> 
                {this.props.isFetching ? <Preloader />:null}
                <UsersPresent totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged} currentPage={this.props.currentPage} follow={this.props.follow}
                unfollow={this.props.unfollow} users={this.props.users} />
            </>
        )
    }
}
export default Users;