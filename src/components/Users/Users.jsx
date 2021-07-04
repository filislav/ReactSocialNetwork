import axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import UserPhoto from './../../assets/avatar.png';


const Users = (props)=>{   
    if(props.users.length===0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then((responce)=>{
            props.setUsers(responce.data.items);   
        });
    }
    return(
        <div >
            {props.users.map((u)=><div key={u.id}>
            <div className={s.container}>    
                <div>
                    <div className={s.photo}>
                        <img src={UserPhoto}/>
                    </div>
                    <div>
                        {u.followed? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>: 
                        <button onClick={()=>{props.follow(u.id)}}>Follow</button>}                      
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
export default Users;