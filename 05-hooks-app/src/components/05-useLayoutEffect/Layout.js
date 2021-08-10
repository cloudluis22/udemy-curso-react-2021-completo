import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../05-useLayoutEffect/layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0]; // Si hay datos obtiene la cita.

    return (
        <div>
            <h1>Layout Effects</h1>
            <hr />

            <blockquote className="blockquote text-right">
            <p className="mb-0 quote"> {quote} </p>
            </blockquote>

            <button className="btn btn-primary" onClick={ increment }> Next Quote </button>

        </div>
    )
}