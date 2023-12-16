import PropTypes from "prop-types";

export function Button({ text, name }) {
  return (
    <button
      onClick={function () {
        console.log("Hola mundo");
      }}
    >
      {text} - {name}
    </button>
  );
}
// Sirve para determiar los tipos y si son requeridos
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  name: "Some User",
};
