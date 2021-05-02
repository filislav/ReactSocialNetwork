import React, { Component } from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

class Profile extends Component {
    render() {
        let posts = [{id:1,message:'Hi, how are you?',likeCount:34},
        {id:2,message:"It's my first post",likeCount:56},
        {id:3,message:"It's my second post",likeCount:13}
        ];
        return (
            <div>
                <div className={s.profile_img}>
                    <img src="img/Landscape-Color.jpg" />
                </div>
                <div className={s.block}>
                    <ProfileInfo />
                    <MyPosts posts = {posts}/>
                </div>
            </div>
        )
    }
}
export default Profile;