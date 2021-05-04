import React,{Component} from 'react';
import s from './Avatars.module.css';
import Avatar from './Avatar/Avatar';

class Avatars extends Component{
    render(){
        const avatarsElements = this.props.friends.map((friend)=>(<Avatar img={friend.photo_url} name={friend.name} />));
        return(
            <div className={s.avatars}>
                {avatarsElements}
            </div>
        )
    }
}
export default Avatars; 