import React from 'react';
import s from './Users.module.css';
import UserPhoto from './../../assets/avatar.png';
import {NavLink} from 'react-router-dom';

let UsersPresent = (props)=>{
    let pagesCount = Math.ceil(props.totalCount/props.pageSize);
    let pages =[];
    for(let i=1;i<=pagesCount;i++){
        pages.push(i);
    }
    return(
        <div >
        <div className={s.pages}> 
            {pages.map((p)=>{
                return <span className={s.pageNumb + ' ' + (props.currentPage===p 
                    && s.nowActive)} onClick={()=>{props.onPageChanged(p)}}>{p}</span>
            })}
        </div>
        {props.users.map((u)=><div key={u.id}>
         
            <div className={s.container}>    
                <div>
                <NavLink to={'/profile/'+u.id}> 
                    <div className={s.photo}>
                        <img src={UserPhoto}/>
                    </div>
                </NavLink>  
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
    );
}
export default UsersPresent;