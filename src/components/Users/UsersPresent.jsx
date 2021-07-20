import React from 'react';
import s from './Users.module.css';
import UserPhoto from './../../assets/avatar.png';
import {NavLink} from 'react-router-dom';
import {followAPI} from './../../api/api';

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
                        {u.followed? <button disabled={props.followInProgress.some(id=>id===u.id)} onClick={()=>{
                            props.setFollowInProgress(true,u.id);
                            followAPI.unfollow(u.id).then(responce=>{
                                if(responce.data.resultCode == 0){
                                    props.unfollow(u.id);
                                }
                                props.setFollowInProgress(false,u.id);
                            });
                        }}>Unfollow</button>:
                        //some() - если хоть один элемент массива 
                        <button disabled={props.followInProgress.some(id=>id===u.id)} onClick={()=>{
                            props.setFollowInProgress(true,u.id);
                            followAPI.follow(u.id).then(responce=>{
                                if(responce.data.resultCode == 0){
                                    props.follow(u.id);
                                }
                                props.setFollowInProgress(false,u.id);
                            });
                            
                        }}>Follow</button>}                      
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