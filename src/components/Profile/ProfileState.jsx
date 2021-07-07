import React,{Component} from 'react';
import Profile from './Profile.js';

class ProfileState extends Component{
    // componentDidMount(){ //все ajax запросы(первоначального сотояния с сервера) делаются в этом методе ответ в responce.data
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
    //     .then((responce)=>{   
    //     this.props.setUserProfile(responce.data);   
    //     });
    // }
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        <Profile profile={this.props.profile}/>
    }
}
export default ProfileState;