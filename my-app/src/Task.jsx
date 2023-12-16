import "./task.css";

// Tambien puedes importarlo normalmente, esto se hace por componente

export function TaskCard(props) {
  const cardStyle = { background: "#202020", color: "#FFF", padding: "20px" };

  // Para poder aniadir estilos es necesario utilizar la propiedad style, pero para escribir dentro de esta propiedad le tenemos que pasar codigo JS. Y para las propiedades del style, es necesario escribirlo como un objeto. En el formato JSON.

  return (
    <div className="card">
      <h1 style={{ cardStyle }}>Mi primera tarea</h1>
      <span
        style={props.ready ? { background: "green" } : { background: "red" }}
      >
        {props.ready === true ? "Tarea Realizada" : "Tarea Pendiente"}
      </span>
      <span className={props.ready ? "bg-green" : "bg-red"}>
        {props.ready === true ? "Tarea Realizada" : "Tarea Pendiente"}
      </span>
    </div>
  );
  // Los nombres de las propiedades de etiquetas no son las mismas que en html.
}
