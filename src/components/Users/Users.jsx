import axios from 'axios';
import React,{Component} from 'react';
import UsersPresent from './UsersPresent';
import Preloader from './../Preloader/Preloader';

class Users extends Component{
   
    componentDidMount(){
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((responce)=>{
        this.props.setIsFetching(false);
        this.props.setUsers(responce.data.items);
        this.props.setTotalCount(54);//responce.data.totalCount);   
        });
    }
    onPageChanged = (p)=>{
        this.props.setCurrentPage(p);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
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
//<img src={fetchImg} className={s.tRed}/> : null}
// const Users = (props)=>{
//     let getUsers = () =>{   
//         if(props.users.length===0){
//             axios.get("https://social-network.samuraijs.com/api/1.0/users").then((responce)=>{
//                 props.setUsers(responce.data.items);   
//             });
//         }
//     }
//     return(
//         <div >
//             <button className={s.getUsers}onClick ={getUsers} >Get Users</button>
//             {props.users.map((u)=><div key={u.id}>
//             <div className={s.container}>    
//                 <div>
//                     <div className={s.photo}>
//                         <img src={UserPhoto}/>
//                     </div>
//                     <div>
//                         {u.followed? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>: 
//                         <button onClick={()=>{props.follow(u.id)}}>Follow</button>}                      
//                     </div>
//                 </div>
//                 <div className={s.data}>
//                     <div className={s.info}>
//                         <div><span>Name: </span>{u.name}</div>
//                         <div><span>Status: </span>{u.status}</div>
//                     </div>
//                     <div className={s.info}>
//                         <div><span>City: </span>{"u.location.city"}</div>
//                         <div><span>Country: </span>{"u.location.country"}</div>
//                     </div>
//                 </div> 
//             </div>   
//             </div>)}
//         </div>
//     )
// }
export default Users;