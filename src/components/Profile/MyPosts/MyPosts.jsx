import React, { Component } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

class MyPosts extends Component {
    render() {
        return (
            <div>
                <div>
                    <p>New post: </p>
                <div>
                    <textarea></textarea>
                    <br />
                    <button>Send</button>
                 </div>
                </div>
                <div className={s.posts}>
                    Posts:
                    <Post message = 'Hi, how are you?' likeCount='34'/>
                    <Post message = "It's my first post" likeCount='56'/>
                </div>
            </div>
        )
    }
}
export default MyPosts; 