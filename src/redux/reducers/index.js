import { combineReducers } from "redux";
import {todoReducers} from './todo.reducers';

export default combineReducers({
    todo : todoReducers
})