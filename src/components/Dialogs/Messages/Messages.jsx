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
                <DialogInput updateNewMessageText={this.props.updateNewMessageText} 
                addMessage={this.props.addMessage} newMessage={this.props.newMessage}/>
            </div>
        )
    }
}
export default Messages;