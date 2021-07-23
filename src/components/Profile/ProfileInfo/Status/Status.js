import React,{Component} from 'react';
import s from './Status.module.css';

class Status extends Component{
    state ={
        editMode:false
    };
    activateEditMode =()=>{ //если метод объявлен как => то контекст this не теряется при передачи его в качестве callback
        this.setState({ //set асинхронный меняет состояние после завершения работы функции
            editMode:true
        })
    }
    deactivateEditMode =()=>{
        this.setState({
            editMode:false
        })
    }
    render(){
        return(
            <div className={s.status}>
                {!this.state.editMode && //если editMode == false то отрисуется следующий div
                    <div>
                        <span onDoubleClick={this.activateEditMode}>Status : {this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input className={s.input} autoFocus={true} onBlur={this.deactivateEditMode} placeholder="Type your status..."/>
                    </div>
                }
            </div>
        )
    }
}
export default Status;