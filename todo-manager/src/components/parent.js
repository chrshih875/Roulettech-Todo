import React, { useState } from "react";
import AllTasks from "./AllTasks";
import CompletedTasks from "./CompletedTask";
import IncompleteTasks from "./IncompleteTask";
import { Link } from "react-router-dom";

const TaskManager = () => {
  const [view, setView] = useState("all"); // Default view

  return (
    <div>
      <div className="btn-group mt-3">
        <button className="btn btn-primary me-2" onClick={() => setView("all")}>
          All Tasks
        </button>
        <button
          className="btn btn-secondary me-2"
          onClick={() => setView("completed")}
        >
          Completed Tasks
        </button>
        <button className="btn btn-info" onClick={() => setView("incomplete")}>
          Incomplete Tasks
        </button>
      </div>

      <div className="mt-3">
        {view === "all" && <AllTasks />}
        {view === "completed" && <CompletedTasks />}
        {view === "incomplete" && <IncompleteTasks />}
      </div>
      <Link to="/create" className="btn btn-primary mb-3">
        Add New Task
      </Link>
    </div>
  );
};

export default TaskManager;
