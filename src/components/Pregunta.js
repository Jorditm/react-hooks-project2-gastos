import React, { Fragment, useState } from "react";
import Error from "./Error";

// Se escribe asi { guardarPresupuesto, guardarRestante } destructuring,  para no tener  que poner  props. (lo que sea)
const Pregunta = ({
  guardarPresupuesto,
  guardarRestante,
  actualizarPregunta,
}) => {
  //Definir State
  //Lo definimos en 0 por que trabajaremos con cantidades
  const [cantidad, setCantidad] = useState(0);
  //definimos otro state para los errores, en este caso como un boolean
  const [error, setError] = useState(false);

  //Funcion que lee el presupuesto
  //usaremos  parseInt() para que nos pase los datos  del presupuesto como numeros y no como string
  const definirPresupuesto = (event) => {
    setCantidad(parseInt(event.target.value, 10));
  };

  //Submit para definir el presupuesto
  const agregarPresupuesto = (event) => {
    event.preventDefault();
    //Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      //Poner el return es para cortar el if una vez se cumple, es como poner else pero mas limpio
      return;
    }
    //a continuación de la validación
    setError(false);
    // estos dos props van a ser igual a la cantidad por que se ira modificando en todo momento y nos hara  el calculo
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {/* Creamos este ternario para cuando haya datos o no */}
      {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="coloca tu presupuesto"
          onChange={definirPresupuesto}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="definir presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
