import React, { Component } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

class MyPosts extends Component {
    render() {
        let postsElements = this.props.posts.map(p=>(<Post message ={p.message} likeCount={p.likeCount}/>));
        return (
            <div>                 
                <div className={s.newPost}>
                    <p>New post: </p>
                    <div className={s.textBlock}><textarea className={s.text}></textarea></div>                   
                    <div className={s.button} ><button className={s.butt}>Send</button></div>
                 </div>
                <div className={s.posts}>
                    <p>Posts: </p>
                    {postsElements}
                </div>
            </div>
        )
    }
}
export default MyPosts; 