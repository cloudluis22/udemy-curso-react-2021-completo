import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en el componente del Counter App.', () => {

    let wrapper = shallow(<CounterApp />)

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });
    
    test('Debe hacer match el componente con una snapshot. ', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('El componente de CounterApp debe mostrar el valor por defecto de 100.', () => {

        const number = 100;
        const wrapper = shallow(<CounterApp number={number} />)
        
        const h2Info = Number(wrapper.find('h2').text());
    
        expect(h2Info).toBe(number);

    });
    
    test('El botón +1 de CounterApp debe funcionar correctamente.', () => {

        wrapper.find('button').at(0).simulate('click');
        const h2Info = Number(wrapper.find('h2').text());

        expect(h2Info).toBe(16)
        
    });

    test('El botón -1 de CounterApp debe funcionar correctamente.', () => {

        wrapper.find('button').at(1).simulate('click');

        const h2Info = Number(wrapper.find('h2').text());

        expect(h2Info).toBe(14);

    });
    
    test('El botón de reiniciar de el componente debería funcionar.', () => {

        const number = 64;
        const wrapper = shallow(<CounterApp number={number} />)

        wrapper.find('button').at(1).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        wrapper.find('button').at(2).simulate('click');
        const h2Info = Number(wrapper.find('h2').text());

        expect(h2Info).toBe(number);

    });
    
    
})
