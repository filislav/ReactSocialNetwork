import React, { Component } from 'react';
import s from './Profile.module.css';

class Profile extends Component {
    render() {
        return (
            <div className={s.profile}>
                <div className={s.profile_img}>
                    <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
                </div>
                <div>
                    Ava+Description
                </div>
                <div>
                    MyPost
                 <div>
                        New Post
                 </div>
                </div>
                <div className={s.posts}>
                    Posts
                    <div className={s.post}>
                        Post 1
                    </div>
                    <div className={s.post}>
                        Post2
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;