import React, { useEffect, useState } from "react";
import axios from "axios";

const CompletedTasks = () => {
  const [todos, setTodos] = useState([]);

  const API_BASE_URL = "http://52.53.233.152:8000";

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/todos/?completed=true`)
      .then((response) => setTodos(response.data))
      .catch((error) =>
        console.error("There was an error fetching the tasks!", error)
      );
  }, []);

  return (
    <div>
      <h2>Completed Tasks</h2>
      <table className="table table-bordered mx-auto" style={{ width: "40%" }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <th scope="row">{index + 1}</th>
              <td>{todo.task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompletedTasks;
