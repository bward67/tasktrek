import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag.jsx";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
  }); //!but then we must add the name="task" as an attribute

  const handleChange = (e) => {
    // console.log(e.target); //we get <input etc tag when we type in the input and we get <select etc when we select an option in the dropdown
    // const name = e.target.name;
    //const value = e.target.value;
    //or we can use object destructuring and do this:
    const { name, value } = e.target;
    // console.log({ name, value });
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");

  // console.log(task, status);

  // const handleTaskChange = (e) => {
  //   setTask(e.target.value);
  // };

  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };
  //! when we click the + Add Task button
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };

  return (
    <header className="app_header">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
          name="task"
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="Javascript" />
            <Tag tagName="React" />
          </div>
          <div>
            <select
              className="task_status"
              name="status"
              id=""
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
