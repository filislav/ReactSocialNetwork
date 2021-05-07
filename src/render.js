import React from 'react';
import ReactDOM from 'react-dom';
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

export default reRenederEntireTree;