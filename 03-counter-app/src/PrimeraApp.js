import React from 'react';
import PropTypes from 'prop-types';

// Functional Components
// El parametro es una propiedad.
const PrimeraApp = ( { mensaje, subtitulo } ) => {

    // Solo se puede retornar un elemento a la vez, pero usando un fragment puedes adjuntar varios elementos en uno solo.
    return (
        // Esto es un fragment
        <> 
            <h1>{mensaje}</h1>
            <p>{subtitulo}</p>
        </>
    );


}

// Los PropTypes sirven para hacer requeridas las propiedades y solo de un cierto tipo al usar un componente.
PrimeraApp.propTypes = {
    mensaje: PropTypes.string.isRequired // la propiedad "mensaje" requiere ser un string y es obligatorio usarlo.
}

// Los default props sirven para dar valores por defecto a las propiedades si no se les asigna uno al ser utilizados.
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;