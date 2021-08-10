import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effect.css';

export const MemoHook = () => {

    const { counter, increment } = useCounter(2000);
    const [show, setShow] = useState(true);

    const procesoPesado = (iteraciones) => {
        for (let index = 0; index < iteraciones; index++) {
            console.log('hola');
        }

        return `${iteraciones} iteraciones realizadas.`;
    }

    const memo = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1> Memorize Hook </h1>
            <hr />

            <p> { memo } </p>

            <h2>Counter: <small>{ counter }</small> </h2>
            <button className="btn btn-primary" onClick={increment}> +1 </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={() => {
                    setShow(!show)
                }}
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    )
}