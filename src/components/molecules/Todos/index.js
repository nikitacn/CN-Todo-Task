import React from "react";
import { CardAtom } from "../../atoms";
import {Spinner} from 'react-bootstrap'
export function Todos({ todos, loading }) {
  if(loading){
   return <Spinner animation="grow" size={"xl"} />
  }
  if (!todos || !todos.length) {
    return <h1>No Todo Available!</h1>;
  }
  return (
    <div className="todo-container">
      {todos.map((todo) => {
        return <CardAtom todo={todo} />;
      })}
    </div>
  );
}
