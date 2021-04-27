import React,{Component} from 'react';
import s from './Dialogs.module.css';

class Dialogs extends Component{
    render(){
        return(
            <div className={s.dialog}>
                <div className={s.dialog_items}>
                    <div className={`${s.dialog_item} ${s.active}`}>Slava</div>
                    <div className={s.dialog_item}>Andrew</div>
                </div>
                <div className={s.messages}>
                    <div className={s.message}>Привет</div>
                    <div className={s.message}>Как дела?</div>
                    <div className={s.message}>Что нового?</div>
                </div>
            </div>
        )
    }
}
export default Dialogs;