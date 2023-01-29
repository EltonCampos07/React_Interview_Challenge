import React from "react";

function Button({ texto, ...props }) {
  return <button {...props}>{texto}</button>;
}

export default Button;
