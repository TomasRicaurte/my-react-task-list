import React from 'react';

function TaskItem({ task, onDelete, onEdit }) {
  return (
    <li>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <button onClick={onDelete}>Eliminar</button>
      <button onClick={onEdit}>Editar</button>
      {/* <button onClick>Completo</button> */}
    </li>
  );
}

export default TaskItem;
