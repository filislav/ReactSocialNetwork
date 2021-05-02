import React,{Component} from 'react';
import s from "./Info.module.css";

class Info extends Component{
    render(){
        let name = "Name: "+this.props.name;
        let secName = "Second Name: "+this.props.secName;
        let email = "e-mail: "+this.props.myemail;
        return(
            <div className={s.info}>
                <p>{name}</p>
                <p>{secName}</p>
                <p>{email}</p>
            </div>
        )
    }
}
export default Info;