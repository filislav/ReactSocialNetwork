import React,{Component} from 'react';
import s from "./Avatar.module.css";

class Avatar extends Component{
    render(){
        return(
            <div className={s.avatar}>
                <img src="/img/avatar.png" className={s.avatar_img}></img>
            </div>
        )
    }
}
export default Avatar;