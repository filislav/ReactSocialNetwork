import React, { Component } from 'react';
import s from './Post.module.css';

class Post extends Component {
    
    render() {
        return (
            <div className={s.common_post}>
                <div className={s.post}>
                    <div className={s.ava}><img src="img/avatar.png" className={s.image}></img></div>
                    <div className={s.text}><p className={s.message}>{this.props.message}</p></div>
                </div>
                <div><img src="img/like.png" className={s.like}></img></div>
                <div className={s.like_c}><p>{this.props.likeCount}</p></div>
            </div>
        )
    }
}
export default Post;