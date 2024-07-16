import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateTask from "./components/CreateTask";
import TaskManager from "./components/parent";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/create" element={<CreateTask />} />
          <Route path="/" element={<TaskManager />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
