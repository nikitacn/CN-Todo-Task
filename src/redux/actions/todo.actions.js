import { ADD_TODO, SET_TODO } from "../actionTypes";

export const setTodo = (payload) => {
    return {
      type: SET_TODO,
      payload,
    };
  };
  export const addTodo = (payload) => {
    return {
      type: ADD_TODO,
      payload,
    };
  };
