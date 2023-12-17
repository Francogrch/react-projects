import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./data/tasks";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  // Este useEffect es para incializar el task con los datos del areglo del otro archivo
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    //de esta manera se puede agregar elementos al final, con ...tasks lo copia

    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
