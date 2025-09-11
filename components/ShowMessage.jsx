// Desafio 3

import { useReducer, useState } from "react";

function ShowMessage() {
    const [isOpen, toggleIsOpen] = useReducer((state) => {
        return !state;
    }, false);

    return (
        <div>
            <button onclick={() => ShowMessage()}> Mostrar mensagem </button>
            <p id="messageDisplay" style="display: none;">Olá, essa é a mensagem secreta!</p> 
        </div>
    );
}

export default ShowMessage;