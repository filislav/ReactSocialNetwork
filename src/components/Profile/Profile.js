import React, { Component } from 'react';
import s from './Profile.module.css';
import MyPostContainer from './MyPosts/MyPostContainer';
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

class Profile extends Component {
    render() {
        return (
            <div>
                <div className={s.profile_img}>
                    <img src="img/Landscape-Color.jpg" />
                </div>
                <div className={s.block}>
                    <ProfileInfoContainer />
                    <MyPostContainer />
                </div>
            </div>
        )
    }
}
export default Profile;