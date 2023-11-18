import React, { useState, useEffect } from "react";
import { Box, Button, Input, Link, List, Text } from "@chakra-ui/react";
import { CheckCircleIcon, PlusSquareIcon } from "@chakra-ui/icons"
import TaskItem from "./TaskItem";

function TaskList() {
  fetch(`http://localhost:5000/tasks/`, {
    method: "GET",
    headers:{
      "Content-Type" : "application/json",
      authorization : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlRvbWFzIiwiaWF0IjoxNzAwMjc1Njc4LCJleHAiOjE3MDAyNzkyNzh9.uET7QFnSfHuIV9r2ZlCkgcgka398FomLXRIpSGzow_Q"
    }, 
  }).then((response) => response.json())
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error);
  });;

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
    <Box justifyContent="center">
      <Link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></Link>
      <Box display="flex" alignItems="center" justifyContent="space-around" w="500px" >
        <Text fontSize="20px" fontWeight="semibold">Agregar Tarea</Text>
        <Input
          type="text"
          w="auto"
          border="solid"
          placeholder="New Task"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        {editIndex !== null ? (
          <Button onClick={saveTask} bg="none">
            < CheckCircleIcon boxSize="20px"/>
          </Button>
        ) : (
          <Button bg="none" onClick={addTask}>
            <PlusSquareIcon boxSize="25px" />
          </Button>
        )}
      </Box>
      <List marginTop="">
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onDelete={() => deleteTask(index)}
            onEdit={() => editTask(index)}
          />
        ))}
      </List>
    </Box>
  );
}

export default TaskList;
