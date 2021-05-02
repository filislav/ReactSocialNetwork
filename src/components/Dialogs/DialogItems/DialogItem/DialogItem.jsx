import React,{Component} from 'react';
import s from'./DialogItem.module.css';
import {NavLink} from 'react-router-dom';

class DialogItem extends Component{
    render(){
        let path = "/dialogs/"+this.props.id;
        return(       
            <div className={s.dialog_item}><NavLink to={path}  activeClassName={s.active}>{this.props.name}</NavLink> <hr /></div>          
        )
    }
}
export default DialogItem;