import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className='profile'>
                <div className='profile_img'>
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
                <div>
                    Posts
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post2
                    </div>
                </div>
            </div>
        )
    }
}
export default Profile;