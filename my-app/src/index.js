import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard, TipoProps } from "./Greeting";
import { Button } from "./Button";
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <Button text="Click me" />
    <Button text="Pay" />
    <Button text="Hi" name="Diferente" />
    <TipoProps
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () {
        alert("Hello");
      }}
    />
    <TipoProps />
  </>
);
