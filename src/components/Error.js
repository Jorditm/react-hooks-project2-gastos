import React from "react";

const Error = ({ mensaje }) => (
  //en vez de pasarle un mensaje tal cual en el <p> se lo pasamos como props y asi poder cambiarlo si fuera necesario des del componente Pregunta
  <p className="alert alert-danger error">{mensaje}</p>
);

export default Error;
