import React,{Component} from 'react';
import s from'./DialogItem.module.css';

class DialogItem extends Component{
    render(){
        return(
            <div className={s.dialog_item}>{this.props.name}</div>
        )
    }
}
export default DialogItem;