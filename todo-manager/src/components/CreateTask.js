import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateTask = () => {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const API_BASE_URL = "http://52.53.233.152:8000";

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API_BASE_URL}/api/todos/`, {
        task: task,
      })
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        setError("Failed to create task");
        console.error(error);
      });
  };

  return (
    <div classtask="container">
      <h1>Input a Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mx-auto mb-2"
          id="formControlInput"
          placeholder="Task"
          style={{ width: "30%" }}
          value={task}
          onChange={(event) => setTask(event.target.value)}
        ></input>
        <button type="submit" className="btn btn-primary mt-2">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
