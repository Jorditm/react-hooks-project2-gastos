import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const Formulario = ({ setGasto, setCrearGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //cuando el user agrega un gasto

  const agregarGasto = (event) => {
    event.preventDefault();

    //Validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    //Construir el gasto
    const gasto = { nombre, cantidad, id: shortid.generate() };
    //pasar el gasto el componente principal
    setGasto(gasto);
    //Pasamos este prop para que cuando se genere el gasto, este prop pase a true
    setCrearGasto(true);
    //Resetear el form
    setNombre("");
    setCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>

      {error ? (
        <Error mensaje="Ambos campos son obligatorios o el presupuesto es incorrecto" />
      ) : null}
      <div className="campo">
        <label>Nombre gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej.Transporte"
          // value se añade para poder vaciar el input al enviar el form y para saber que valor coge
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

export default Formulario;
