import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../08-useReduce/TodoApp';
import { TodoAdd } from '../../../08-useReduce/TodoAdd';
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';

describe('Pruebas en el componente de "<TodoApp />".', () => {

    const wrapper = shallow(<TodoApp />);

    test('Debe de mostrarse correctamente y crear una snapshot.', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de agregar un TODO', () => {

        const wrapper = mount(<TodoApp />);

        act(() => {
            wrapper.find(TodoAdd).prop('handleAddTodo')(demoTodos[0]);
        });

    });

});