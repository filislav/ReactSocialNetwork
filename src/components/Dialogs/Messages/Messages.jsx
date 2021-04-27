import React,{Component} from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';

class Messages extends Component{
    render(){
        return(
            <div className={s.messages}>
                <Message message="Привет" />
                <Message message="Как дела?" />
                <Message message="Что нового?" />
            </div>
        )
    }
}
export default Messages;