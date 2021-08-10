import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

import './index.css';

const root = document.querySelector('#root');

// Se renderiza el mensaje con el componente creando también una propiedad llamada mensaje.
ReactDOM.render(<CounterApp />, root);