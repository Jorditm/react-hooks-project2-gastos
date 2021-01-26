import React, { Fragment } from "react";
import { revisarPresupuesto } from "../helpers";

const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto:{presupuesto} €</div>
      {/* vamos a a gregar un helper para el cambio de color en funcion de lo que n os quede de presupuesto */}
      {/* helper es un archivo que tiene ciertas funciones que se pueden reutilizar en diferentes sitios */}
      <div className={revisarPresupuesto(presupuesto, restante)}>
        Restante:{restante} €
      </div>
    </Fragment>
  );
};

export default ControlPresupuesto;
