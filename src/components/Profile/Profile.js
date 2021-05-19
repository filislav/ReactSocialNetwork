import React, { Component } from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

class Profile extends Component {
    render() {
        return (
            <div>
                <div className={s.profile_img}>
                    <img src="img/Landscape-Color.jpg" />
                </div>
                <div className={s.block}>
                    <ProfileInfo />
                    <MyPosts state ={this.props.state} dispatch={this.props.dispatch}/>
                </div>
            </div>
        )
    }
}
export default Profile;