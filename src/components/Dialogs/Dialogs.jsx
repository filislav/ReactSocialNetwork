import React,{Component} from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';

class Dialogs extends Component{
    render(){
        return(
            <div className={s.dialog}>
                <DialogItems />
                <Messages />
            </div>
        )
    }
}
export default Dialogs;