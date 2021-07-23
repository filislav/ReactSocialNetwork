import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

export const AuthRedirect = (Component) =>{
    class RedirectComponent extends Component{
        render(){
            if(!this.props.isAuth){
                return <Redirect to={"/login"} />
            }
            return <Component {...this.props}/>
        }
    }
    let mapStateToProps =(state) => ({
        isAuth:state.auth.isAuth
    });
    let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent);
    return ConnectRedirectComponent;
}