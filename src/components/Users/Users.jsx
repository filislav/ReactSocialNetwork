import axios from 'axios';
import React,{Component} from 'react';
import s from './Users.module.css';
import UserPhoto from './../../assets/avatar.png';


class Users extends Component{
   
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((responce)=>{
        this.props.setUsers(responce.data.items);
        this.props.setTotalCount(54);//responce.data.totalCount);   
        });
    }
    onPageChanged = (p)=>{
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
        .then((responce)=>{
        this.props.setUsers(responce.data.items);   
        });
    }
    render(){
        let pagesCount = Math.ceil(this.props.totalCount/this.props.pageSize);
        let pages =[];
        for(let i=1;i<=pagesCount;i++){
            pages.push(i);
        }
        return(
            <div >
                <div className={s.pages}> 
                    {pages.map((p)=>{
                        return <span className={s.pageNumb + ' ' + (this.props.currentPage===p 
                            && s.nowActive)} onClick={()=>{this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {this.props.users.map((u)=><div key={u.id}>
                <div className={s.container}>    
                    <div>
                        <div className={s.photo}>
                            <img src={UserPhoto}/>
                        </div>
                        <div>
                            {u.followed? <button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>: 
                            <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}                      
                        </div>
                    </div>
                    <div className={s.data}>
                        <div className={s.info}>
                            <div><span>Name: </span>{u.name}</div>
                            <div><span>Status: </span>{u.status}</div>
                        </div>
                        <div className={s.info}>
                            <div><span>City: </span>{"u.location.city"}</div>
                            <div><span>Country: </span>{"u.location.country"}</div>
                        </div>
                    </div> 
                </div>   
                </div>)}
            </div>
        )
    }
}
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