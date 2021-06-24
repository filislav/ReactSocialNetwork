import {connect} from 'react-redux';
import Dialogs from './Dialogs';
import {updateNewMessageTextActionCreator,addMessageActionCreator} from './../../redux/dialogsReducer';

let mapToStateProps=(state)=>{
    return{
        dialogs:state.dialogs.dialogs,
        messages:state.dialogs.messages,
        newMessageText:state.dialogs.newMessageText
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        updateNewMessageText:(text)=>{
            dispatch(updateNewMessageTextActionCreator(text));

        },
        addNewMessage:()=>{
            dispatch(addMessageActionCreator());
        }
    }
}
let DialogsContainer = connect(mapToStateProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;