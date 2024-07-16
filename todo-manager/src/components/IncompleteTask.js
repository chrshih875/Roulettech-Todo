import React, { useEffect, useState } from "react";
import axios from "axios";

const IncompleteTasks = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/todos/?completed=false")
      .then((response) => setTodos(response.data))
      .catch((error) =>
        console.error("There was an error fetching the tasks!", error)
      );
  }, []);

  return (
    <div>
      <h2>Incomplete Tasks</h2>
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

export default IncompleteTasks;
