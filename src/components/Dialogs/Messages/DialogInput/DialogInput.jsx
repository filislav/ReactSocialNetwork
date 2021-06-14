import React,{Component} from 'react';
import s from './DialogInput.module.css';
import {addMessageActionCreator,updateNewMessageTextActionCreator} from './../../../../redux/state';

class DialogInput extends Component{
    render(){
        let addMessage = ()=>{
            this.props.dispatch(addMessageActionCreator());
        }
        let updateMessage =(e)=>{
            let messageBody = e.target.value;
            this.props.dispatch(updateNewMessageTextActionCreator(messageBody));
        }
        return(
            <div className={s.dialogInput}>
                <div className={s.textBlock}>
                    <textarea className={s.text} onChange={updateMessage} 
                    value={this.props.state.newMessageText} placeholder="Enter your message..."></textarea>
                    <button className={s.send} onClick={addMessage}>Send</button>
                </div>
            </div>
        )
    }
}
export default DialogInput;