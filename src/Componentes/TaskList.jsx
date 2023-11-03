import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    completed: false,
  });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.title.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask({ title: "", description: "", completed: false });
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setEditIndex(index);
    setNewTask(tasks[index]);
  };

  const saveTask = () => {
    if (newTask.title.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
      setEditIndex(null);
      setNewTask({ title: "", description: "", completed: false });
    }
  };

  return (
    <div className="TaskList">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="AddTask">
        <h2 className="TitleAdd">Agregar Tarea</h2>
        <input
          className="TaskNew"
          type="text"
          placeholder="New Task"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        {editIndex !== null ? (
          <button onClick={saveTask} className="save"><i class="fa fa-save"/></button>
        ) : (
          <button onClick={addTask} className="agregar">
            <i class="fa fa-plus"/>
          </button>
        )}
      </div>
      <ul className="Task">
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onDelete={() => deleteTask(index)}
            onEdit={() => editTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
