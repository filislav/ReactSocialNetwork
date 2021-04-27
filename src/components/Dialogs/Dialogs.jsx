import React,{Component} from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';

class Dialogs extends Component{
    render(){
        return(
            <div className={s.dialog}>
                <DialogItems />
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