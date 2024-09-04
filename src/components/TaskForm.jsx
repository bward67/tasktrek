import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag.jsx";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  }); //!but then we must add the name="task" and name="status" as an attribute or the onChange function will NOT work

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
    //! we use this function in the <Tag /> component we loop over the tags array in the taskData object and if some of the items inside the array are the same as the tag which will be either HTML, CSS, JS or React - we will pass the words "HTML", "CSS" etc as an argument when we call this function in our <Tag /> component and we will set it to: selected
    //.some will return true or false AND then in our <Tag /> component
    //as a style attribute in the button we ask if selected is true
  };

  const selectTag = (tag) => {
    //console.log(tag);
    //! if the tag already exists in our tags array or not
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
        //! if we don't do [...prev.tags]  we will only get the one tag and not all the ones before it - as it will always overwrite the tag array with the last one we clicked on
      });
    }
  };

  //console.log(taskData.tags);

  const handleChange = (e) => {
    // const name = e.target.name;
    //const value = e.target.value;
    //or we can use object destructuring and do this:
    const { name, value } = e.target;
    // console.log({ name, value });
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //! when we click the + Add Task button
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
      //! so when we start to type in the input we get the taskData array
      //? BUT we want to reset the input to "" after each time the user submits and turn all tags to no color/original grey
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
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
          value={taskData.task}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="Javascript"
              selectTag={selectTag}
              selected={checkTag("Javascript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>
          <div>
            <select
              className="task_status"
              name="status"
              id=""
              onChange={handleChange}
              value={taskData.status}
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
