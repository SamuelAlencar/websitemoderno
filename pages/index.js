import { useState } from 'react'

function Home () {
    return (
        <div>
            <h4>HOME</h4>
            <Contador />
        </div>
    )
}

function Contador () {
    const [contador,setContador] = useState(1);

    function adicionarContator() {
        setContador( contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContator}>Adicionar</button>
        </div>
    )
}
export default Home