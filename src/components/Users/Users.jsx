import React,{Component} from 'react';
import UsersPresent from './UsersPresent';
import Preloader from './../Preloader/Preloader';
import {userAPI} from './../../api/api';

class Users extends Component{
   
    componentDidMount(){
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }
    onPageChanged = (p)=>{
        this.props.setCurrentPage(p);
        this.props.getUsers(p,this.props.pageSize);
    }
    render(){
        return(
            <> 
                {this.props.isFetching ? <Preloader />:null}
                <UsersPresent totalCount={this.props.totalCount} pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged} currentPage={this.props.currentPage} follow={this.props.follow}
                unfollow={this.props.unfollow} users={this.props.users} followInProgress={this.props.followInProgress}
                setFollowInProgress={this.props.setFollowInProgress}/>
            </>
        )
    }
}
export default Users;