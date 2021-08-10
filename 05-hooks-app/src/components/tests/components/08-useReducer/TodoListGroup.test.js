import React from 'react';
import { shallow } from 'enzyme'
import { demoTodos } from "../../fixtures/demoTodos";
import { TodoListGroup } from '../../../08-useReduce/TodoListGroup';
import { TodoListItem } from '../../../08-useReduce/TodoListItem';

describe('Pruebas en el componente funciona de "<TodoListGroup />".', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListGroup
            todos={demoTodos}
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />)

    test('Debe de mostrarse correctamente.', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de contener dos componente de tipo "<TodoListItem />".', () => {

        expect(wrapper.find(TodoListItem).length).toBe(demoTodos.length);
        expect(wrapper.find(TodoListItem).at(0).prop('handleDelete')).toEqual(expect.any(Function));
        expect(wrapper.find(TodoListItem).at(0).prop('handleToggle')).toEqual(expect.any(Function));
    });

});