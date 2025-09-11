// Desafio 2

import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Você clicou {count} times </p>
            <button onclick={() => setCount(count + 1)}>Clique aqui</button>
        </div>
    );
}

export default Counter;