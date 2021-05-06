import React,{Component} from 'react';
import s from './DialogInput.module.css';

class DialogInput extends Component{
    render(){
        let dialogRef = React.createRef();
        let addPost = ()=>{alert(dialogRef.current.value)}
        return(
            <div className={s.dialogInput}>
                <div className={s.textBlock}>
                    <textarea className={s.text} ref={dialogRef}></textarea>
                    <button className={s.send} onClick={addPost}>Send</button>
                </div>
            </div>
        )
    }
}
export default DialogInput;