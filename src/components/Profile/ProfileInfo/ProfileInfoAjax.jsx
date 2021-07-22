import React,{Component} from 'react';
import ProfileInfo from './ProfileInfo';
import axios from 'axios'; 

class ProfileInfoAjax extends Component{
    
    componentDidMount(){
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId);
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).
        // then((responce)=>{
        //     console.log(responce.data);
        //     this.props.setUserProfile(responce.data);
        // });
    }
    render(){
        return(
            <ProfileInfo profile={this.props.profile}/>
        )
    }
}
export default ProfileInfoAjax;