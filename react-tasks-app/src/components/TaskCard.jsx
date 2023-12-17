/* eslint-disable react/prop-types */
function TaskCard({ task }) {
  console.log(task);
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskCard;
