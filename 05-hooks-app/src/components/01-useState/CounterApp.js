import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    // El el useState tendra dos valores iniciales en vez de solo uno, almacenados dentro de un objeto.
    const [state, setState] = useState({
        counter1: 10,
        counter2: 20
    });

    // Desestructurando las variables de el objeto de el useState inicial. (Esto sirve de referencia para mantener los estados.)
    const { counter1, counter2 } = state

    return (
        <>
            <h1>Counter 1 { counter1 }</h1>
            <h1>Counter 2 { counter2 }</h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={ () => {
                    setState({
                        ...state,
                        counter1: counter1 + 1
                    });
                }}
            >
                +1 (Counter 1)
            </button>

            <button
                className="btn btn-primary"
                onClick={() => {
                    setState({
                        ...state,
                        counter2: counter2 + 1
                    });
                }}
            >
                +1 (Counter 2)
            </button>
        </>
    )
}
