import './index.css';
import reportWebVitals from './reportWebVitals';
import state,{subscribe} from './redux/state';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import {addPost,updateNewPostChange,addMessage,updateNewMessageText}from './redux/state';

let reRenederEntireTree = (state)=>{
    ReactDOM.render(
      <React.StrictMode>
        <App state={state} 
        addPost={addPost} 
        updateNewPostChange={updateNewPostChange}
        addMessage={addMessage} 
        updateNewMessageText={updateNewMessageText}
        />
      </React.StrictMode>,
      document.getElementById('root')
    );
}

reRenederEntireTree(state);
subscribe(reRenederEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
