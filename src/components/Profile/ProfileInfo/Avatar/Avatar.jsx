import React,{Component} from 'react';
import s from "./Avatar.module.css";

class Avatar extends Component{
    render(){
        return(
            <div className={s.avatar}>
                <img src={this.props.photo} className={s.avatar_img}></img>
            </div>
        )
    }
}
export default Avatar;