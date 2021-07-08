import React,{Component} from 'react';
import {setUserProfile} from './../../../redux/profileReducer';
import {connect} from 'react-redux';
import ProfileInfoAjax from './ProfileInfoAjax';


let mapStateToProps = (state)=>{
    return{
        profile:state.profile.profile
    }
}
const ProfileInfoContainer = connect(mapStateToProps,{setUserProfile})(ProfileInfoAjax);
export default ProfileInfoContainer;
