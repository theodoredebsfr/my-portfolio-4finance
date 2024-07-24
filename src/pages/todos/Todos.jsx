import { Checkbox } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getAllTodos = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((res) => setTodos(res.data));
    };
    getAllTodos();
  }, []);
  console.log("todos :>> ", todos);
  return (
    <>
      All my Todos
      <ul>
        {todos.map((todo) => (
          <li key={todo}>
            <div>id: {todo.id}</div>
            <div>title: {todo.title}</div>
            <div>
              completed: <input type="checkbox" checked={todo.completed} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
