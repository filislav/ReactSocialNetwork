import React,{Component} from 'react';
import s from './Friends.module.css';
import Avatars from './Avatars/Avatars';

class Friends extends Component{
    render(){
        return(
            <div className={s.friends_container}>
                <div className={s.block_name}>Friends :</div>
                <Avatars friends={this.props.friends}/>
            </div>
        )
    }
}
export default Friends;