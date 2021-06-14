import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './components/Preloader/preloader.css';


let reRenederEntireTree = (state)=>{
    ReactDOM.render(
      <React.StrictMode>
        <App store={state} dispatch={store.dispatch.bind(store)}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

reRenederEntireTree(store.getState());
store.subscribe(reRenederEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
