import axios from 'axios';
import React,{Component} from 'react';
import UsersPresent from './UsersPresent';
import Preloader from './../Preloader/Preloader';

class Users extends Component{
   
    componentDidMount(){
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials:true //с авторизацией
        })
        .then((responce)=>{
        this.props.setIsFetching(false);
        this.props.setUsers(responce.data.items);
        this.props.setTotalCount(54);//responce.data.totalCount);   
        });
    }
    onPageChanged = (p)=>{
        this.props.setCurrentPage(p);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`,{
            withCredentials:true,
        })
        .then((responce)=>{   
        this.props.setIsFetching(false);
        this.props.setUsers(responce.data.items);   
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