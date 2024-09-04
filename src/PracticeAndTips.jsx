import React, { useState } from "react";

const CreateTodo = () => {
  const [tasks, setTasks] = useState(60);
  const [input, setInput] = useState("");
  // just start typing useState and a snippet will appear and give you the template for const [first, setfirst] = useState(second)
  const todoArray = ["work-out", "study", "eat"];
  const displayTodos = todoArray.map((item) => <h3 key={item}>{item}</h3>);

  const hideButton = false;
  const styles = {
    backgroundColor: "blueviolet",
    color: "#fff",
    borderRadius: ".5rem",
    border: "none",
    outline: "none",
  };
  const countTasks = () => {
    return tasks === 0 ? "no tasks available" : `Tasks: ${tasks}`;
    //don't forget the word - return !
  };

  const handleAddTasks = () => {
    setTasks((prevTask) => prevTask + 1);
    //tasks++;
    console.log("IN A MINUTE!", tasks);
  };
  //to duplicate a line:
  //shift alt down

  //to open a file : ctrl P
  //and a drop down list of all your files will be there

  //ctrl /
  //to comment lines out

  //ctrl and click on the component name will bring you to the components page

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <h1>{countTasks()}</h1>
      <input type="text" onChange={handleChange} />
      <h2>Input: {input}</h2>
      <button
        onClick={handleAddTasks}
        style={styles}
        className="btn"
        disabled={hideButton}
        value="Add Task Button"
      >
        Add Task
      </button>
      <div>{displayTodos}</div>
    </>
  );
};

export default CreateTodo;

/*
https://www.youtube.com/watch?v=gVomGzu1JvU&t=231s
1:16
*/
