import React from "react";

function TaskItem({ task, onDelete, onEdit }) {
  
  return (
    <li className="oneTask">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      <h4 className="taskTitle">{task.title}</h4>
      <button onClick={onDelete} className="delete"><i class="fa fa-trash"/></button>
      <button onClick={onEdit} className="edit" ><i class="fa fa-pencil"/></button>
    </li>
  );
}

export default TaskItem;
