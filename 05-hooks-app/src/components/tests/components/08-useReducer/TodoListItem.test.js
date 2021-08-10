import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../08-useReduce/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

const handleDelete = jest.fn();
const handleToggle = jest.fn();

describe('Pruebas en el componente de "<TodoListItem />".', () => {

    const todo = demoTodos[0];
    const index = 0;

    const wrapper = shallow(

        <TodoListItem
            todo={todo}
            index={index}
            handleDelete={handleDelete}
            handleToggle={handleToggle}

        />);

    test('Debe de mostrarse correctamente y generar una snapshot. ', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de llamar la función de handleDelete. ', () => {

        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(todo.id);

    });

    test('Debe de llamar la función de handleToggle ', () => {

        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(todo.id);

    });

    test('Debe de mostrar el texto correctamente.', () => {

        const p = wrapper.find('p').text().trim();
        expect(p).toBe('1. Comprar una fuente de 750w');

    });

    test('Debe de tener la clase "complete" si el TODO está completado.', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(

            <TodoListItem
                todo={todo}
                index={index}
                handleDelete={handleDelete}
                handleToggle={handleToggle}

            />);

        expect(wrapper.find('p').hasClass('complete')).toBe(true);

    });

});