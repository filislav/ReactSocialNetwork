import React,{Component} from 'react';
import {setUserProfile,getUserProfile,getStatus,updateStatus} from './../../../redux/profileReducer';
import {connect} from 'react-redux';
import ProfileInfoAjax from './ProfileInfoAjax';
import { withRouter } from 'react-router-dom';


let mapStateToProps = (state)=>{
    return{
        profile:state.profile.profile,
        isAuth:state.auth.isAuth,
        status:state.profile.status
    }
}

const ProfileInfoContainer = connect(mapStateToProps,{setUserProfile,getUserProfile,getStatus,updateStatus})(withRouter(ProfileInfoAjax));

export default ProfileInfoContainer;
