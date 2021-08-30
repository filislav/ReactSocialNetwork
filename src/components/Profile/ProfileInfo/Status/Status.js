import React,{Component} from 'react';
import s from './Status.module.css';

class Status extends Component{
    
    state ={
        editMode:false,
        status:this.props.status
    };
    activateEditMode =()=>{ //если метод объявлен как => то контекст this не теряется при передачи его в качестве callback
        this.setState({ //set асинхронный меняет состояние после завершения работы функции
            editMode:true
        })
    }
    deactivateEditMode =()=>{

        this.setState({
            editMode:false
        });
        this.props.updateStatus(this.state.status); 
    }
    onStatusChange = (e) =>{
        this.setState({
            status:e.currentTarget.value
        });
    }
    render(){
        return(
            <div className={s.status}>
                {!this.state.editMode && //если editMode == false то отрисуется следующий div
                    <div>
                        <span onDoubleClick={this.activateEditMode}>Status :{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input className={s.input} onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} 
                        value={this.state.status} placeholder="Type your status..."/>
                    </div>
                }
            </div>
        )
    }
}
export default Status;