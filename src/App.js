import React, { useState, useEffect } from "react";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Pregunta from "./components/Pregunta";

function App() {
  //Definir presupuesto
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);

  //useEffect que actualiza el restante
  useEffect(() => {
    if (crearGasto) {
      //agrega el nuevo presupuesto
      setGastos([...gastos, gasto]);

      //Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      //cuando se haya ejecutado el  codigo, pasara a false
      setCrearGasto(false);
    }
  }, [gasto, crearGasto, gastos, restante]);

  //cuando agreguemos un nuevo gasto
  //Eliminamos agregarNuevoGasto y lo pasamos al useEffect

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              // pasamos guardarPresupuesto  como props para que posteriormente al añadir gastos lo reste del presupuesto
              guardarPresupuesto={guardarPresupuesto}
              // pasamos guardarRestante como props para que posteriormente al calcular el restante  del presupuesto
              guardarRestante={guardarRestante}
              // este prop sera para mostrar u ocultar el input de presupuesto
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  // incluimos este prop para poder crear nuevos gastos en el componente formulario, posteriormente lo hemos cambiado por  el useEffect y ahora es el state creado
                  setGasto={setGasto}
                  setCrearGasto={setCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
