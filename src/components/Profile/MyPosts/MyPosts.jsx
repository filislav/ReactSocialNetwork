import React, { Component } from 'react';
import News from '../../News/News';
import s from './MyPosts.module.css';
import Post from './Post/Post';

class MyPosts extends Component {
    render() {
        let postsElements = this.props.posts.map(p=>(<Post message ={p.message} likeCount={p.likeCount}/>));
        let newPost = React.createRef();     
        let addPost = ()=>{
            this.props.addPost(newPost.current.value);
            newPost.current.value ='';
        };

        return (
            <div>                 
                <div className={s.newPost}>
                    <p>New post: </p>
                    <div className={s.textBlock}><textarea ref={newPost} className={s.text}></textarea></div>                   
                    <div className={s.button} ><button className={s.butt} onClick={addPost}>Send</button></div>
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