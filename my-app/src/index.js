import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard, TipoProps } from "./Greeting";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

//tambien puedo crear la funcion y luego llamarla.
// arrow function () => {}
const handleChange = (e) => {
  console.log(e.target.value + "...");
};

root.render(
  <>
    <Button text="Click me" />
    <TaskCard ready={false}></TaskCard>
    <Saludar />
    <input
      type="text"
      onChange={function (e) {
        console.log(e.target.value + "...");
      }}
    />
    <input type="text" onChange={handleChange} />
    <input
      type="text"
      onDoubleClick={() => {
        console.log("double click");
      }}
    />
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Enviado");
      }}
    >
      <h1>Registro de ususario</h1>
      <button>Enviar</button>
    </form>
  </>
);
// Los diferentes eventos tienen sus propias propiedades, en este caso llamo a la promiedad como e, pero con ponerle cualquier nombre en los parametros los podemos utilizar.

// Con el metodo prevenDefault, se elimina el comportamiento por default dee ese evento
