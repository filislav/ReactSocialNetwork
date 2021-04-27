import react,{Component} from 'react';
import s from './DialogItems.module.css';
import DialogItem from './DialogItem/DialogItem';

class DialogItems extends Component{
    render(){
        return(
            <div className={s.dialog_items}>
                <DialogItem name="Slava" />
                <DialogItem name="Andrey" />
            </div>
        )
    }
}
export default DialogItems;