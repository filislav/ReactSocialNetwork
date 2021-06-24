import React, { Component } from 'react';
import News from '../../News/News';
import s from './MyPosts.module.css';
import Post from './Post/Post';


class MyPosts extends Component {
    render() {
        debugger;
        let postsElements = this.props.posts.map(p=>(<Post message ={p.message} likeCount={p.likeCount} key={p.id}/>));
        let newPost = React.createRef();     
        let addPost = ()=>{
            this.props.addPost();
        };
        let onPostChange = ()=>{
            this.props.updateNewPostText(newPost.current.value);
        };
        return (
            <div>                 
                <div className={s.newPost}>
                    <p>New post: </p>
                    <div className={s.textBlock}><textarea onChange={onPostChange} ref={newPost} className={s.text} 
                    value={this.props.newPostText} placeholder="Enter your message..." /></div>                   
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