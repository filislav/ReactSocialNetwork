import React,{Component} from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';
import DialogInput from './DialogInput/DialogInput';

class Messages extends Component{
    render(){
        let messagesElements=this.props.state.messages.map((m)=><Message message={m.message} />);
        return(
            <div className={s.messages}>
                {messagesElements}
                <DialogInput state={this.props.state}/>
            </div>
        )
    }
}
export default Messages;