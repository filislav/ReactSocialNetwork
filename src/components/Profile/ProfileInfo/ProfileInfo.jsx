import React,{Component} from 'react';
import s from "./ProfileInfo.module.css";
import Avatar from "./Avatar/Avatar";
import Info from "./Info/Info";
import {Redirect} from 'react-router-dom';

class ProfileInfo extends Component{
    render(){ 
        return(
            <div>
                <div className={s.profile_img}>
                        <img src="img/Landscape-Color.jpg" />
                    </div>
                <div className={s.profileInfo}>
                    <Avatar photo={this.props.profile.photos.large}/>
                    <Info name={this.props.profile.fullName} secName="Filippov" myemail="fil38@gmail.com" status={this.props.status} 
                    updateStatus={this.props.updateStatus}/>
                </div>
            </div>
        )
    }
}
export default ProfileInfo;