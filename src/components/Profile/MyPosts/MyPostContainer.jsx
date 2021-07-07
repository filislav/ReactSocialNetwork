import React from 'react';
import {addPost, updateNewPostText} from './../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostContainer = (props)=>{           
//     return(
//         <StoreContext.Consumer>{           
//             (store) => {
//                 let addPost = ()=>{
//                     store.dispatch(addPostActionCreator());
//                 };
//                 let onPostChange = (text)=>{
//                     store.dispatch(updateNewPostTextActionCreator(text));
//                 };
//                 return(
//                     <MyPosts updateNewPostText={onPostChange} addPost={addPost} 
//                     posts = {store.getState().profile.posts} newPostText={store.getState().profile.newPostText}/>
//                 )               
//             }
//         }</StoreContext.Consumer>
//     )
// }
let mapStateToProps = (state)=>{
    return {
        posts:state.profile.posts,
        newPostText:state.profile.newPostText
    }
}
// let mapDispatchToProps =(dispatch)=>{
//     return {
//         updateNewPostText:(text)=>{
//             dispatch(updateNewPostTextActionCreator(text));
//         },
//         addPost:()=>{
//             dispatch(addPostActionCreator());
//         }
//     }
// }
const MyPostContainer = connect(mapStateToProps,{addPost,updateNewPostText})(MyPosts);

export default MyPostContainer;