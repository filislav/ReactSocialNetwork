import React from 'react';
import s from './Users.module.css';


let Users = (props)=>{
    if(props.users.length===0){ //так делать не првильно это для демо
        props.setUsers([
            {id:1,photoUrl:'img/avatar.png',followed:false,fullName:'Dmitry K.',location:{country:'Russia',city:'Moscow'},status:"I'am here"},
            {id:2,photoUrl:'img/avatar.png',followed:true,fullName:'Mickhail S.',location:{country:'Russia',city:'Samara'},status:"Stylish"},
            {id:3,photoUrl:'img/avatar.png',followed:true,fullName:'Vadim S.',location:{country:'USA',city:'Los Angeles'},status:"Listen the music..."}
        ]);
    }
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