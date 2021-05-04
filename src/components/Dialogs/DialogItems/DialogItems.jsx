import React,{Component} from 'react';
import s from './DialogItems.module.css';
import DialogItem from './DialogItem/DialogItem';

class DialogItems extends Component{
    render(){       
        let dialogElements = this.props.dialogs.map((dialog)=>(<DialogItem name={dialog.name} id={dialog.id}/>));
            return(
                <div className={s.dialog_items}>
                    {dialogElements}
                </div>
            )
    }
}
export default DialogItems;