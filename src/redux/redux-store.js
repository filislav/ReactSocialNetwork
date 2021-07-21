import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navReducer from './navReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
    profile:profileReducer,
    dialogs:dialogsReducer,
    nav:navReducer,
    users:usersReducer,
    auth:authReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleWare));//applyMiddleware для обработки thunk

export default store;