import React, { useState } from "react";
import PropTypes from "prop-types";
import Resultado from "./Resultado";
import { operaciones } from "../helpers/operaciones";

const NumberInput = () => {
  const [numeros, setNumeros] = useState({
    numero1: 0,
    numero2: 0,
  });

  const { handleChange, suma, resta,multiplicacion,division, numero1, numero2 } = operaciones(
    numeros,
    setNumeros
  );
  return (
    <>
      <label htmlFor="">
        Numero1:
        <input
          name="numero1"
          value={numero1}
          onChange={handleChange}
          type="number"
        />
      </label>
      <label htmlFor="">
        Numero2:
        <input
          name="numero2"
          value={numero2}
          onChange={handleChange}
          type="number"
        />
      </label>


      <Resultado operacion='suma ' calculo={suma()} />
      <Resultado operacion="resta " calculo={resta()} />
      <Resultado operacion='multiplicacion ' calculo={multiplicacion()} />
      <Resultado operacion='division ' calculo={division()} />

    </>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string,
};

export default NumberInput;