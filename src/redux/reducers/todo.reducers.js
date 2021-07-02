import { ADD_TODO, SET_TODO } from "../actionTypes";

const initialState = {
  todos: [],
};

export const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let todos = state.todos;
      todos.unshift(action.payload) 
      return { ...state, todos  };
    case SET_TODO:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};
