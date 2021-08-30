import React,{Component} from 'react';
import s from "./Info.module.css";
import Status from './../Status/Status';

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
                <Status status ={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}
export default Info;