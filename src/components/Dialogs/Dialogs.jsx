import React,{Component} from 'react';
import s from './Dialogs.module.css';
import DialogItems from './DialogItems/DialogItems';
import Messages from './Messages/Messages';

class Dialogs extends Component{
    render(){
        let dialogs = [{id:1,name:"Slava"},{id:2,name:"Andrey"},{id:3,name:"Sasha"},{id:4,name:"Masha"},{id:5,name:"Sveta"}];
        let messages=[{message:"Привет",id:1},{message:"Как дела?",id:2},{message:"Что нового?",id:3}]
        return(
            <div className={s.dialog}>
                <DialogItems dialogs={dialogs}/>
                <Messages messages = {messages}/>
            </div>
        )
    }
}
export default Dialogs;