import React,{Component} from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';
import DialogInput from './Messages/DialogInput/DialogInput';

class Dialogs extends Component{
    render(){       
        return(
            <div className={s.dialog}>
                <DialogItems dialogs={this.props.state.dialogs}/>
                <Messages messages = {this.props.state.messages} 
                updateNewMessageText={this.props.updateNewMessageText} addMessage={this.props.addMessage}
                newMessage={this.props.state.newMessageText}/>
            </div>
        )
    }
}
export default Dialogs;