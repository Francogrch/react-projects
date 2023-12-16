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
