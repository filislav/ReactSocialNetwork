import React,{Component} from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';
import DialogInput from './Messages/DialogInput/DialogInput';
import {Redirect} from 'react-router-dom';

class Dialogs extends Component{
    render(){
        if(!this.props.isAuth){
            return <Redirect to={"/login"} />
        }       
        return(
            <div className={s.dialog}>
                <DialogItems dialogs = {this.props.dialogs}/>
                <Messages messages = {this.props.messages} updateNewMessageText={this.props.updateNewMessageText}
                addNewMessage={this.props.addMessage} newMessageText={this.props.newMessageText}/>
            </div>
        )
    }
}
export default Dialogs;