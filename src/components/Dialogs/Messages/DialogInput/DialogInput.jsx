import React,{Component} from 'react';
import s from './DialogInput.module.css';

class DialogInput extends Component{
    render(){
        let dialogRef = React.createRef();
        let addMessage = ()=>{
            this.props.addMessage();
        }
        let updateMessage =()=>{
            this.props.updateNewMessageText(dialogRef.current.value);
        }
        return(
            <div className={s.dialogInput}>
                <div className={s.textBlock}>
                    <textarea className={s.text} onChange={updateMessage} 
                    value={this.props.newMessage} ref={dialogRef} placeholder="Enter your message..."></textarea>
                    <button className={s.send} onClick={addMessage}>Send</button>
                </div>
            </div>
        )
    }
}
export default DialogInput;