import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navReducer from './navReducer';
import usersReducer from "./usersReducer";

let reducers = combineReducers({
    profile:profileReducer,
    dialogs:dialogsReducer,
    nav:navReducer,
    users:usersReducer
});

let store = createStore(reducers);

export default store;