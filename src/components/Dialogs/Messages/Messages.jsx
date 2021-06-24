import React,{Component} from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';
import DialogInput from './DialogInput/DialogInput';

class Messages extends Component{
    render(){
        let messagesElements=this.props.messages.map((m)=><Message message={m.message} />);
        return(
            <div className={s.messages}>
                {messagesElements}
                <DialogInput dialogs={this.props.dialogs} updateNewMessageText={this.props.updateNewMessageText}
                addNewMessage={this.props.addNewMessage} newMessageText={this.props.newMessageText}/>
            </div>
        )
    }
}
export default Messages;