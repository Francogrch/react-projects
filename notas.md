## Crear proyecto [React] (https://create-react-app.dev/)

### Con Create React App

    npx create-react-app my-app
    cd my-app
    npm start

### Con [Vite](https://vitejs.dev/guide/)

## Estructura de proyecto

### src

En src se pone el codigo, tanto de html css y js

En index.js:

### public

En public se pone los HTML
En index.html:

- el id root es necesario en el div del body, asi pedes crear interaces dentro del div

### package.json

En este archivo esta guardada las versiones de las bibliotecas que se utilizan

### node_module

Lo utiliza nodejs para las librerias, no se toca

### Carpeta build

Se crea con npm run build, se utiliza al terminar de desarrollar.
Esta carpeta es la que se sirve cuando se terminar

## Hola Mundo en React

Creamos un index.js en src, es necesario que tenga ese nombre
index.js

import React from "react";
import ReactDOM from "react-dom/client";

// Es para traer el elemento root

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// Con el render se renderiza este html dentro del div root
root.render(<h1>Hola React</h1>);

## Componentes de React

Los componentes son las partes de la aplicacion, sirven para reutilizarse.
Hay un componente inicial donde este tiene todo, este componente es el llamado root
Es necesario que los componentes comiencen con Mayuscula

## Tu primer componente

Son funciones.

    import React from "react";
    import ReactDOM from "react-dom/client";

    const rootElement = document.getElementById("root");
    const root = ReactDOM.createRoot(rootElement);

    // Recordar que si o si los componentes tienen que estar dentro de alguna etiqueta osea dentro de un elemento padre
    function Greeting() {
      return (
        <div>
          <h1>Este es un componente</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            exercitationem assumenda aliquid perferendis rem odit voluptates dolor
            beatae cumque corporis blanditiis dolores, provident, optio laudantium
            animi at ut accusamus nostrum!
          </p>
        </div>
      );
    }

    // Para llamar a la funcion dentro del HTML es necesario porner el nombre dentro de las llaves
    // Tambien puedes llamarlo como una etiqueta de html - Self closing tags
    root.render(
      <div>
        {Greeting()}
        <Greeting />
      </div>
    );

## JSX

JSX es el lenguaje que une HTML y JavaScript. Al final y al cabo todo se transforma en codigo JavaScript. Simplente es para escribirlo de una manera mas facil para comprenderlo.

Importante: es necesario que todo lo que retorne si son mas de un elemento html, es necesario que tenga un elemento padre

        import React from "react";
        import ReactDOM from "react-dom/client";

        const rootElement = document.getElementById("root");
        const root = ReactDOM.createRoot(rootElement);

        function Greeting() {
          const married = false;
          const name = "Pepe";
          // Permite utilizar unicode(emoticones)
          return (
            <h1>
              Hola {name} {married ? "estas casado 😅" : "no estas casado 😆"}
            </h1>
          );
        }
        // retornar un objeto
        function Objeto() {
          function add(x, y) {
            return x + y;
          }
          const user = {
            firstName: "Ryan",
            lastName: "Ray",
            married: false,
          };

          // return <h1>{user}</h1>;
          // Esto estaria mal, ya que los objetos no son permitidos de esta manera, para poder usarlo es necesario utilizar el objeto JSON con el metodo stringify

          //return <h1>{JSON.stringify(user)}</h1>;
          //De esta manera no es muy utilizado

          //Esta es la mas utilizada
          return (
            <div>
              <h1> {user.firstName} </h1>
              <h1> {user.lastName} </h1>
              <h1> Esta casado: {user.married.toString()}</h1>
              <h1>La suma de 10 + 10 es {add(10, 10)}</h1>
            </div>
          );
        }
        function Text() {
          // Recordar que dentor de las llaves ejecuta el codigo javascript
          const name = "Pepa";
          return (
            <h1>
              {" "}
              Hola {name}. La suma de 10 + 10 es {10 + 10}
            </h1>
          );
        }
        // etiqueta Fragment <></>
        // Sirve para poner componentes en la misma etiqueta padre
        root.render(
          <div>
            {Greeting()}
            <Greeting />
            <Objeto />
            <>
              <Text />
              <Text />
              <Text />
            </>
          </div>
        );

## EcmaScript - Javascript Modules

Para poder varios componentes es necesario dividirlos en diferentes archivos.
Para poder exportar uan funcion desde otro archivo js, es necesario poner el export antes de la declaracion dela funcion. Tambien se puede exportar de manera por default con el export default nombreFuncion al final del archivo.

Para importar se tiene que hacer como esta manera.

### index.js

    import React from "react";
    import ReactDOM from "react-dom/client";
    import { Greeting, UserCard } from "./Greeting";
    import Product, { Navbar } from "./Product";

            const rootElement = document.getElementById("root");
            const root = ReactDOM.createRoot(rootElement);

            root.render(
              <>
                <Greeting />
                <UserCard />
                <Product />
                <Navbar />
              </>
            );

### Product.js

    function Product() {
    return (

    <div>
    <h1>Producto</h1>
    </div>
    );
    }

        export function Navbar() {
          return <nav>Este es el navbar</nav>;
        }
        export default Product;

### Greeting.js

    export function Greeting() {
    return <h1>Componete de React</h1>;
    }

            export function UserCard() {
              return <h1>User Card</h1>;
            }

## Extension jsx

Para diferenciar los archivos js, con los archivos de componentes de react, se utiliza las extensiones .jsx

## React Props

Sirve para cambiar datos dentro de un componente.
Para utilizar parametros del la funcion como atributos de la etiqueta, es necesario utilizar el parametro Props

### index.js

        import React from "react";
        import ReactDOM from "react-dom/client";
        import { Greeting, UserCard, TipoProps } from "./Greeting";

        const rootElement = document.getElementById("root");
        const root = ReactDOM.createRoot(rootElement);

        root.render(
          <>
            <Greeting name="Franco" />
            <Greeting name="Pedro" />
            <Greeting name="Carlos" />
            <UserCard title="card" name="Luis" />
            <UserCard title="card" />
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

### Greeting.jsx

        export function Greeting(props) {
          return <h1>Hola {props.name}</h1>;
        }

        // Destructuracion de objeto
        // Valores por defecto
        export function UserCard({ title, name = "User" }) {
          return (
            <h1>
              UserCard: {title} with name: {name}
            </h1>
          );
        }

        export function TipoProps({
          name = "Charles",
          amount = 3000,
          married = true,
          points = [2, 3],
          address = { city: "Buenos Aires", street: "Lavalle" },
          greet,
        }) {
          return (
            <h2>
              {" "}
              Hello {name}. Your ammount is {amount}.{" "}
              {married ? "You are married" : "You are not married"}. You have{" "}
              {points.reduce((iter, item) => iter + item, 0)}. And your address is:
              <ul>
                <li>City: {address.city}</li>
                <li>Street: {address.street}</li>
              </ul>
            </h2>
          );
        }

## PropTypes y defaultProps

Para conocer los tipos de los parametros de los componetes es necesario instlar prop-types.
Esto se instala dentor de la carpeta del proyecto.

        npm install --save prop-types

### index.js

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

### Button.jsx

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

## Estilos

### index.js

    import React from "react";
    import ReactDOM from "react-dom/client";
    import { Greeting, UserCard, TipoProps } from "./Greeting";
    import { Button } from "./Button";
    import { TaskCard } from "./Task";
    const rootElement = document.getElementById("root");
    const root = ReactDOM.createRoot(rootElement);

    root.render(
    <>
    <TaskCard ready={false}></TaskCard>
    </>
    );

### Task.jsx

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

### task.css

    .card {
    background-color: black;
    color: aliceblue;
    }

    .bg-red {
    background-color: red;
    }

    .bg-green {
    background-color: green;
    }

## Tipos de componentes

Ademas de las funciones para crear componentes, se pueden crear con clases

### Saludar.jsx

    import { Component } from "react";

    export class Saludar extends Component {
      render() {
        return <h1>Hello word</h1>;
      }
    }

### index.js

    import React from "react";
    import ReactDOM from "react-dom/client";

    import { Saludar } from "./Saludar";

    const rootElement = document.getElementById("root");
    const root = ReactDOM.createRoot(rootElement);

    root.render(
      <>
        <Saludar />
      </>
    );

    // Aun es soportado por react, escriobir los componentes como clases

## Event Handlers

Manejador de eventos, sirve para hacer algo cuando ocurre uin evento.

### Button.jsx

    import PropTypes from "prop-types";

    export function Button({ text, name }) {
      return (
        <button
          onClick={function () {
            console.log("Hola mundo");
          }}
    // Sirve para determiar los tipos y si son requeridos
    Button.propTypes = {
      text: PropTypes.string.isRequired,
    };

    Button.defaultProps = {
      name: "Some User",
    };
      );
    }
    // Sirve para determiar los tipos y si son requeridos
    Button.propTypes = {
      text: PropTypes.string.isRequired,
    };

    Button.defaultProps = {
      name: "Some User",
    };

### index.js

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

## Fetch API

Una de las API mas utilizadas es Fetch, sirve para traer datos de otro lugar (servidor, sitioweb)

[JasonPlaceHolder](https://jsonplaceholder.typicode.com/)

Retorna JSON, lista de objetos.

### Posts.jsx

    export const Post = () => {
      return (
        <button
          onClick={() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
              .then((response) => response.json())
              .then((data) => console.log(data))
              .catch((error) => console.error(error));
          }}
        >
          Traer Datos
        </button>
      );
    };
    // Esto es una promesa (fetch then catch)
    // Es mejor hacerlo con asicaway
    // El catch sirve para que cuando ocurra un error ejecute lo que tiene por parametro

### index.js

    import React from "react";
    import ReactDOM from "react-dom/client";
    import { Greeting, UserCard, TipoProps } from "./Greeting";
    import { Button } from "./Button";
    import { TaskCard } from "./Task";
    import { Saludar } from "./Saludar";
    import { Post } from "./Posts";

    const rootElement = document.getElementById("root");
    const root = ReactDOM.createRoot(rootElement);

    root.render(
      <>
        <Post />
      </>
    );

## Third Party modules, react-icons

Para poder utilizar modulos de terceros, o componentes hay que importarlos como componentes.

En este caso utilizaremos el modulo de [react-icons](https://react-icons.github.io/react-icons/).

Otros como:
[MaterialUI](https://mui.com/)

### Posts.jsx

    import { VscGlobe, VscArchive } from "react-icons/vsc";

    export const Post = () => {
      return (
        <button
          onClick={() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
              .then((response) => response.json())
              .then((data) => console.log(data))
              .catch((error) => console.error(error));
          }}
        >
          <VscGlobe />
          Traer Datos
          <VscArchive />
        </button>
      );
    };

## Arrays en React

Para generar imagenes aleatoras de usuarios sirve esta pagina [robohash](https://robohash.org/)

Utilizaremos metodos de arreglos:

- map((elem,index) => { elem.prop })
- filter()
- find()
- sort()
- reduce()
- forEach()
  Nota: no modifica arreglos, retornan otro.

### index.js

    import React from "react";
    import ReactDOM from "react-dom/client";

    const rootElement = document.getElementById("root");
    const root = ReactDOM.createRoot(rootElement);

    const user = [
      { id: 1, name: "Ryan Ray", image: "https://robohash.org/user1" },
      { id: 2, name: "Joe", image: "https://robohash.org/user2" },
      { id: 3, name: "Marc", image: "https://robohash.org/user3" },
    ];
    root.render(
      <>
        {user.map((user, index) => {
          return (
            <div key={index}>
              <h1>Nombre: {user.name}</h1>
              <img src={user.image} />
            </div>
          );
        })}
      </>
    );
    //Es necesario utilizar la propiedad key ya que react, al recorrer lo necesita.
    // Este key tiene que estar en el elemento padre

## React Hooks

Son funciones que React nos provee para aniadir funcionalidades extras (interactivas).
[ReactHooks](https://legacy.reactjs.org/docs/hooks-intro.html).
[Listado de ReackHooks](https://legacy.reactjs.org/docs/hooks-reference.html)

### useState

#### index.js

    import React, { useState } from "react";
    import ReactDOM from "react-dom/client";

    const rootElement = document.getElementById("root");
    const root = ReactDOM.createRoot(rootElement);

    // React actualiza el estado mediante un hook de react, no mediante codigo de js.
    // No se puede crear una variable e ir actualizandola con JS solamente

    function Counter() {
      // useState(inicializacion_de_counter)
      const [counter, setCounter] = useState(0);
      // state = [elemento, funcion]
      // elemento es la inicializacion, y la funcion es la que se le aplica al momento del evento
      // En JS puedo exreaer elementos con esta sintaxis.
      // let [primerElemento, segundoElemento] = array

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

      return (
        <div>
          <input onChange={(e) => setMensaje(e.target.value)} type="text" />{" "}
          <button onClick={() => alert("El mensaje es " + mensaje)}>Save</button>
        </div>
      );
    }

    root.render(
      <>
        <Counter />
        <Input />
      </>
    );

### useEffect

index.js

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

## Tu primer aplicacion en React con Vitejs

[ViteJs](https://vitejs.dev/guide/) es una alternativa a create-react-app

    npm create vite

Dentro de la carpeta del proyecto

    npm install

Para comenzarlo:

    npm run dev

En Vite es necesario utilizar extensiones .jsx

En assets van las imagenes.
y en main.jsx es el equivalente al index.js

Para construir (dist) se ejecuta

    npm run build

### Extensiones utiles

Emmet examples:
ul>li\*4>a{Enlace $}

ES7+ React:
rfce : crea componente
imp : importar
clg : console.log()

## Mostrar lista de tareas

### TaskList.jsx

    import { tasks as data } from "./tasks";
    import { useState, useEffect } from "react";

    console.log(data);

    function TaskList() {
      const [tasks, setTasks] = useState([]);

      // Este useEffect es para incializar el task con los datos del areglo del otro archivo
      useEffect(() => {
        setTasks(data);
      }, []);

      if (tasks.lenght === 0) {
        return <h1>No hay tareas aun</h1>;
      }

      return (
        <div>
          {tasks.map((task) => (
            <div key={task.id}>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
            </div>
          ))}
        </div>
      );
    }

    export default TaskList;

### Añadir tareas al formulario

UI componet Tree
Al tener componentes separados, es necesario pasarle al componente padre la variable que se quiere modificar.

App.jsx

    import TaskList from "./TaskList";
    import TaskForm from "./TaskForm";
    import { tasks as data } from "./tasks";
    import { useState, useEffect } from "react";

    function App() {
      const [tasks, setTasks] = useState([]);

      // Este useEffect es para incializar el task con los datos del areglo del otro archivo
      useEffect(() => {
        setTasks(data);
      }, []);

      function createTask(taskTitle) {
        //de esta manera se puede agregar elementos al final, con ...tasks lo copia

        setTasks([
          ...tasks,
          {
            title: taskTitle,
            id: tasks.length,
            description: taskTitle,
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

TaskForm.jsx

    import { useState } from "react";

    // eslint-disable-next-line react/prop-types
    function TaskForm({ createTask }) {
      const [title, setTitle] = useState("");

      const handleSubmit = (e) => {
        e.preventDefault();
        createTask(title);
      };

      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese la tarea"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <button>Guardar</button>
        </form>
      );
    }

    export default TaskForm;

TaskList.jsx

    /* eslint-disable react/prop-types */
    function TaskList({ tasks }) {
      if (tasks.lenght === 0) {
        return <h1>No hay tareas aun</h1>;
      }

      return (
        <div>
          {tasks.map((task) => (
            <div key={task.id}>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
            </div>
          ))}
        </div>
      );
    }

    export default TaskList;

## Separar componentes

Es dividir secciones de componentes en otros componentes

Para ordenar los archivos dentro del src, se puede agregar la carpeta components
Ademas dentro de src se puede crear otra carpeta llamada data
para guardar los archivos con data

TaskCard.jsx

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

TaskList.jsx

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

App.jsx

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

## Eliminar Tarea

04:04:12 crear Contexto
04:20:35 useContext
04:30:04 TailwindCSS
04:42:24 Despliegue Github Pages
