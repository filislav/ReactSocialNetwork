import {connect} from 'react-redux';
import Dialogs from './Dialogs';
import {updateNewMessageText,addMessage} from './../../redux/dialogsReducer';
import {Redirect} from 'react-router-dom';
import { AuthRedirect } from '../../hoc/AuthReadirect';
import { compose } from 'redux';

let mapToStateProps=(state)=>{
    return{
        dialogs:state.dialogs.dialogs,
        messages:state.dialogs.messages,
        newMessageText:state.dialogs.newMessageText, 
    }
}
export default compose(connect(mapToStateProps,{addMessage,updateNewMessageText}),AuthRedirect)(Dialogs); //compose для сединения обработчиков 