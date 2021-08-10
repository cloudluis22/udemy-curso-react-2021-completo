import React, { useState } from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({ number }) => {

    const [ counter, setCounter ] = useState(number);
    
    const addNumber = () => setCounter(counter + 1);
    const substractNumber = () => setCounter(counter - 1);
    const resetNumber = () =>  setCounter(number);
    

    return (
        <>
            <h1> Counter App </h1>
            <h2> { counter } </h2>
            
            <button onClick = { addNumber } id="agregar" > +1 </button>
            <button onClick = { substractNumber } id="restar" > -1 </button>
            <button onClick = { resetNumber } id="reiniciar" > Reiniciar </button>
        </>
    );
}

CounterApp.propTypes = {
    number: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    number: 15 
}

export default CounterApp;