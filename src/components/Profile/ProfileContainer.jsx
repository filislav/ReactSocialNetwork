import React,{Component} from 'react';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profileReducer';
import ProfileState from './ProfileState';


let mapStateToProps = (state)=>({
    posts:state.profile.posts,
    newPostText:state.profile.newPostText,
    profile:state.profile.profile
});

let ProfileContainer = connect(mapStateToProps,{setUserProfile})(ProfileState);
export default ProfileContainer;