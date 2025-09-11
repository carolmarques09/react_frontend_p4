import React, { use, useState } from 'react';

export default function RandomNumber() {
    const [numero, setNumero] = useState(generateRandom());

    function generateRandom() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function handleClick() {
        setNumero(generateRandom());
    }

    return (
        <div style={{textAlign: 'center', marginTop: '20px'}}>
            <h2>Número atual</h2>
            <button onclick={handleClick}>Gerar novo número aleatório</button>
        </div>
    );
}