import React,{Component} from 'react';
import s from "./ProfileInfo.module.css";
import Avatar from "./Avatar/Avatar";
import Info from "./Info/Info";

class ProfileInfo extends Component{
    render(){
        return(
            <div className={s.profileInfo}>
                <Avatar />
                <Info name="Slava" secName="Filippov" myemail="fil38@gmail.com"/>
            </div>
        )
    }
}
export default ProfileInfo;