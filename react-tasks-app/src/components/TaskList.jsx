import TaskCard from "./TaskCard";
/* eslint-disable react/prop-types */
function TaskList({ tasks }) {
  if (tasks.lenght === 0) {
    return <h1>No hay tareas aun</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TaskList;
