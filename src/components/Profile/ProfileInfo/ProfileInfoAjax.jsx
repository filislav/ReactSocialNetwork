import React,{Component} from 'react';
import ProfileInfo from './ProfileInfo';
import axios from 'axios'; 

class ProfileInfoAjax extends Component{
    
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).
        then((responce)=>{
            console.log(responce.data);
            this.props.setUserProfile(responce.data);
        });
    }
    render(){
        return(
            <ProfileInfo profile={this.props.profile}/>
        )
    }
}
export default ProfileInfoAjax;