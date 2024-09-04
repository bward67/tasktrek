import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard.jsx";

const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
  //const {title, icon} = props or do object destructing directly above
  // console.log(Todo); //   we get:  /src/assets/direct-hit.png

  return (
    <section className="task_column">
      <h2 className="task_columm_heading">
        <img className="task_column_icon" src={icon} alt="" />

        {title}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;

//https://www.youtube.com/watch?v=gVomGzu1JvU&t=231s
//1:53
