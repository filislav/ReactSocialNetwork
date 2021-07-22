import React,{Component} from 'react';
import {setUserProfile,getUserProfile} from './../../../redux/profileReducer';
import {connect} from 'react-redux';
import ProfileInfoAjax from './ProfileInfoAjax';
import { withRouter } from 'react-router-dom';


let mapStateToProps = (state)=>{
    return{
        profile:state.profile.profile
    }
}

const ProfileInfoContainer = connect(mapStateToProps,{setUserProfile,getUserProfile})(withRouter(ProfileInfoAjax));

export default ProfileInfoContainer;
