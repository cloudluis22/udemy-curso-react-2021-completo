import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en el componente de PrimeraApp.', () => {

    test('Debe mostrar el componente de PrimeraApp correctamente.', () => {
        
        const wrapper = shallow(<PrimeraApp mensaje="Hola Mundo" />)

        expect(wrapper).toMatchSnapshot();

    });
    
    test('Debe mostrar el subtitulo enviado por props.', () => {
        
        
        const saludo = 'Hola Mundo';
        const subtitulo = 'Soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp
            mensaje = { saludo }
            subtitulo = { subtitulo }
            />
        );

        const parrafo = wrapper.find('p').text();
        
        expect(parrafo).toBe(subtitulo);

    });
    
});