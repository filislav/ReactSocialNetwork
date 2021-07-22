import React from 'react';
import {addPost, updateNewPostText} from './../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state)=>{
    return {
        posts:state.profile.posts,
        newPostText:state.profile.newPostText
    }
}

const MyPostContainer = connect(mapStateToProps,{addPost,updateNewPostText})(MyPosts);

export default MyPostContainer;