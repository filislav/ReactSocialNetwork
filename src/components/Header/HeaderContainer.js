import React,{Component} from 'react';
import Header from './Header';
import {setAuthUserData,auth} from './../../redux/authReducer';
import {connect} from 'react-redux';
import {authAPI} from './../../api/api';

class HeaderContainer extends Component{
    componentDidMount(){ //withCredentionals - значит что вы авторизованы
        this.props.auth();
        // authAPI.authMe().then((responce)=>{
        //     if(responce.data.resultCode===0){
        //         let{id,login,email} = responce.data.data;
        //         this.props.setAuthUserData(id,email,login);
        //     }
        // });
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
export default connect(mapStateToProps,{setAuthUserData,auth}) (HeaderContainer);