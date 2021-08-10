import React from 'react';
import { shallow } from 'enzyme'
import { TodoAdd } from '../../../08-useReduce/TodoAdd';

describe('Pruebas en el componente de <TodoAdd />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(<TodoAdd handleAddTodo={ handleAddTodo } />)

    test('Debe de mostrarse correctamente y crear una snapshot.', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('NO debe de llamar al "handleAddTodo".', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() { } });

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('Debe de llamar la función de "handleAddTodo".', () => {

        const value = 'Comprar un R5 5600X';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() { } });

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });

        // Comprobar que el formulario se reinicia despues del submit.
        expect(wrapper.find('input').prop('value')).toBe('');

    });

});