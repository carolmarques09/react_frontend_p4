// Desafio 1 

import { useState } from "react";

export default function App() {
    const [number_1, setNum1] = useState(0);
    const [number_2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(null);

    function somar() {
        setResultado(Number(number_1) + Number(number_2));
    };

    return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Somar dois números</h2>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Digite o primeiro número!"
      />
      <br /><br />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Digite o segundo número!"
      />
      <br /><br />

      <button onClick={somar}>Somar</button>

      {resultado !== null && (
        <h3>Resultado: {resultado}</h3>
      )}
    </div>
  );
};