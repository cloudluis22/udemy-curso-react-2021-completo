import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import AddCategory from '../../components/AddCategory'

describe('Pruebas en el componente de <AddCategory />.', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    // JestDOM NO RECONOCE window.alert así que debe hacerce como una función mock.
    window.alert = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('El componente debe renderizarse correctamente.', () => expect(wrapper).toMatchSnapshot());

    test('La caja de texto debe de cambiar de valor', () => {

        const input = wrapper.find('input');
        const value = 'Among Us';

        // Simula que se escribe el valor de la variable.
        input.simulate('change', { target: { value } })

        // Seleccionando el valor nuevamente pero una vez su valor ya ha cambiado.
        const inputAfter = wrapper.find('input');

        expect(inputAfter.prop('value')).toBe(value);
    })

    test('Al hacer submit este no debe postear si no hay valores en la caja de texto.', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();

        // Reinicia la información que pueda haber en la función.
        window.alert.mockClear();

    })

    test('Debe de llamarse la función setCategories y posteriormente la caja de texto debe de estar vacía.', () => {

        const value = 'Red Dead Redemption 2';
        const input = wrapper.find('input');
        input.simulate('change', { target: { value } }) // Simulando el input introduciendo el valor.

        // Simulando el submit de el formulario posterior a escribir la busqueda.
        wrapper.find('form').simulate('submit', { preventDefault() { } });
        const inputAfter = wrapper.find('input'); // Obteniendo el input de nuevo pero después de haber posteado.

        expect(inputAfter.prop('value')).toBe('') // Debe vaciarse.
        expect(setCategories).toHaveBeenCalled(); // Debe haberse llamado.
        expect(setCategories).toBeCalledWith(expect.any(Function)); // Tiene que ser una función.

    })

});
