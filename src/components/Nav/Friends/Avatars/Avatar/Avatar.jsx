import React,{Component} from 'react';
import s from './Avatar.module.css';

class Avatar extends Component{
    render(){
        return(
            <div className={s.friend_container}>
                <div className={s.photo}><img src={this.props.img} /></div>
                <div className={s.name}>{this.props.name}</div>
            </div>
        )
    }
}
export default Avatar;