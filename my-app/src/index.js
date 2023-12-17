import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrementar
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        {" "}
        Reiniciar{" "}
      </button>
    </div>
  );
}

function Input() {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0);
  // Al momento del cambio se ejecuta la funcion pasada por parametro
  useEffect(() => {
    console.log("render");
  }, [counter]);
  // al poner como segundo parametro la una lista vacia, se ejecuta una sola vez, al momento de la creacion del componente
  // El segundo paramentro es una lista, de los estados que van a ejecutar el useEffect al momento de modificarse. Por ejemplo aqui solamente se ejecuta al momento de modificarse el counter
  // La funcion useEffect es dependiente de la variable counter

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} type="text" />{" "}
      <button onClick={() => alert("El mensaje es " + mensaje)}>Save</button>
      <hr />
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Incrementar
      </button>
    </div>
  );
}

root.render(
  <>
    <Counter />
    <Input />
  </>
);
