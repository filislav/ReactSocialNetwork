import React from 'react';
import s from './Users.module.css';


const Users = (props)=>{    
    return(
        <div >
            {props.users.map((u)=><div key={u.id}>
            <div className={s.container}>    
                <div>
                    <div className={s.photo}>
                        <img src={u.photoUrl}/>
                    </div>
                    <div>
                        {u.followed? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>: 
                        <button onClick={()=>{props.follow(u.id)}}>Follow</button>}                      
                    </div>
                </div>
                <div className={s.data}>
                    <div className={s.info}>
                        <div><span>Name: </span>{u.fullName}</div>
                        <div><span>Status: </span>{u.status}</div>
                    </div>
                    <div className={s.info}>
                        <div><span>City: </span>{u.location.city}</div>
                        <div><span>Country: </span>{u.location.country}</div>
                    </div>
                </div> 
            </div>   
            </div>)}
        </div>
    )
}
export default Users;