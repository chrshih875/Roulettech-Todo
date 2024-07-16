import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  const API_BASE_URL = "http://52.53.233.152:8000";

  useEffect(() => {
    axios
      .get("${API_BASE_URL}/api/todos/")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const markAsCompleted = (id) => {
    axios
      .post(`http://localhost:8000/api/todos/${id}/mark_as_completed/`)
      .then((response) => {
        setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
      })
      .catch((error) => {
        console.error(
          "There was an error marking the todo as completed!",
          error
        );
      });
  };

  if (error) return <p>You forgot to run server!</p>;

  return (
    <div className="container">
      <h1>All Task</h1>
      <table className="table table-bordered mx-auto" style={{ width: "40%" }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col" style={{ width: "40%" }}>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <th scope="row">{index + 1}</th>
              <td>{todo.task}</td>
              <td>
                {todo.completed ? (
                  "Completed"
                ) : (
                  <button onClick={() => markAsCompleted(todo.id)}>
                    Mark as Completed
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
