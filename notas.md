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

index.js
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

Product.js
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

Greeting.js
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

index.js

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

Greeting.jsx

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



01:36:31 Estilos
01:50:49 Tipos de componentes
01:54:34 Event Handlers
02:08:51 Fetch API
02:16:04 Third Party modules, react-icons
02:23:02 Arrays en React
02:36:05 React Hooks
02:38:52 useState
02:55:19 useEffect
03:02:28 Tu primer aplicacion en React con Vitejs
03:14:24 Mostrar lista de tareas
03:24:15 Añadir tareas al formulario
03:43:03 Separar componentes
03:52:12 Eliminar Tarea
04:04:12 crear Contexto
04:20:35 useContext
04:30:04 TailwindCSS
04:42:24 Despliegue Github Pages

