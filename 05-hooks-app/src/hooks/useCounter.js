import { useState } from "react"

export const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState)

    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter, // El estado actual.
        increment, // Función incremento.
        decrement, // Función decremento.
        reset // Función de reseteo.
    }

}
