import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm.jsx";
import TaskColumn from "./components/TaskColumn.jsx";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");

//const [tasks, setTasks] = useState([JSON.parse(oldTasks)]);

console.log(oldTasks);

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  //console.log("tasks", tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />

      <main className="app_main">
        <TaskColumn
          title="To do"
          icon={todoIcon}
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;

//  https://www.youtube.com/watch?v=gVomGzu1JvU&t=231s
//starts at 1:17 ends 2:58
//but react functionality starts 1:37 - <Tag /> component
