import React from 'react';
import StoreContext from '../../../StoreContext';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostContainer = (props)=>{           
    return(
        <StoreContext.Consumer>{           
            (store) => {
                let addPost = ()=>{
                    store.dispatch(addPostActionCreator());
                };
                let onPostChange = (text)=>{
                    store.dispatch(updateNewPostTextActionCreator(text));
                };
                return(
                    <MyPosts updateNewPostText={onPostChange} addPost={addPost} 
                    posts = {store.getState().profile.posts} newPostText={store.getState().profile.newPostText}/>
                )               
            }
        }</StoreContext.Consumer>
    )
}
export default MyPostContainer;