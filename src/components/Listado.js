import React from "react";
import Gasto from "./Gasto";
import PropTypes from "prop-types";

const Listado = ({ gastos }) => (
  <div className="gastos-realizados">
    <h2>Listado</h2>
    {gastos.map((gasto) => (
      //Creamos el componente Gasto para poder crear listado de cada gasto, el map es para recorrer cada gasto que vayamos creando, lo importamos meidante props
      <Gasto key={gasto.id} gasto={gasto} />
    ))}
  </div>
);

Listado.propTypes = {
  gastos: PropTypes.array.isRequired,
};

export default Listado;
