import { useState } from "react";

// eslint-disable-next-line react/prop-types
function TaskForm({ createTask }) {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese la tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
      />
      <textarea
        cols="30"
        rows="10"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}
// COn el value= limpias el formulario

export default TaskForm;
