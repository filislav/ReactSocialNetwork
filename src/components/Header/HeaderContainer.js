import React,{Component} from 'react';
import Header from './Header';
import axios from 'axios';
import {setAuthUserData} from './../../redux/authReducer';
import {connect} from 'react-redux';

class HeaderContainer extends Component{
    componentDidMount(){ //withCredentionals - значит что вы авторизованы
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })
        .then((responce)=>{
            if(responce.data.resultCode===0){
                let{id,login,email} = responce.data.data;
                this.props.setAuthUserData(id,email,login);
            }
        });
    }

    render(){
        return(
            <Header {...this.props}/>
        )
    }
}
const mapStateToProps = (state)=>({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})
export default connect(mapStateToProps,{setAuthUserData}) (HeaderContainer);