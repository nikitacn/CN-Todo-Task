import React, { useEffect, useState, useCallback } from "react";
import { TodoTemplate } from "../../templates";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodo } from "../../../redux/actions";
import { Toast } from "../../../utils/toast";
import API from "../../../redux/services";

export function Todo(props) {
  const todos = useSelector((state) => state.todo.todos);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [formSubmiting, setFormSubmiting] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    handleGetTodo();
  }, []);
  const handleAddTodo = (e) => {
      e.preventDefault();
      setFormSubmiting(true);
      let data = {
        title,
        description,
      };
      API.todo
        .addTodo(data)
        .then((response) => {
          dispatch(addTodo(response));
          setFormSubmiting(false);
        })
        .catch((err) => {
          setFormSubmiting(false);

          console.log(err, "eerr");
        });
    }
  const handleGetTodo = useCallback(() => {
    setLoading(true);
    API.todo
      .getTodo()
      .then((response) => {
        dispatch(setTodo(response.reverse()));
        setLoading(false);
        console.log(response);
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: "Could Not Fetch TODOs!",
        });
        setLoading(false);
      });
  }, [todos]);
  return <TodoTemplate todos={todos} loading={loading} handleAddTodo={handleAddTodo} title={title} setTitle={setTitle} description={description} setDescription={setDescription} />;
}
