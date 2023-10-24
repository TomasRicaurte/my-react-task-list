import './App.css';
import Header  from './Header';
import TaskList from './TaskList';

function App() {
  const tasks = [
    { id: 1, name: "Tarea 1", completed: true },
    { id: 2, name: "Tarea 2", completed: false }
  ];

  return (
    <div>
      <Header title="ToDo App" />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
