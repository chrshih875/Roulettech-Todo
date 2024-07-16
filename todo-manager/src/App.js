import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoList from "./components/AllTasks";
import CreateTask from "./components/CreateTask";
import CompletedTasks from "./components/CompletedTask";
import IncompleteTasks from "./components/IncompleteTask";
import TaskManager from "./components/parent";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<TodoList />} /> */}
          <Route path="/create" element={<CreateTask />} />
          <Route path="/comp" element={<CompletedTasks />} />
          <Route path="/incomp" element={<IncompleteTasks />} />
          <Route path="/" element={<TaskManager />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
