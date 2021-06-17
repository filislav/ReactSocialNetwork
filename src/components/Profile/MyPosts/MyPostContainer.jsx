import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/state';
import MyPosts from './MyPosts';

const MyPostContainer = (props)=>{    
        let addPost = ()=>{
            props.dispatch(addPostActionCreator());
        };
        let onPostChange = (text)=>{
            props.dispatch(updateNewPostTextActionCreator(text));
        };
    return(
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} 
        posts = {props.state.posts} newPostText={props.state.newPostText}/>
    )
}
export default MyPostContainer;