import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './components/Preloader/preloader.css';
import {Provider} from 'react-redux';


let reRenederEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App store={state} dispatch={store.dispatch.bind(store)}/>
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

reRenederEntireTree(store.getState());
//у redux store есть свои методы, аналоги что мы делали сами, но не подхватывает state автоматом  - его надо запросить и передать в subscribe
store.subscribe(()=>{
  let state = store.getState();
  reRenederEntireTree(state);
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
