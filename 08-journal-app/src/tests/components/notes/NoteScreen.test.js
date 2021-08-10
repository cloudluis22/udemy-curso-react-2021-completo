import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { NoteScreen } from '../../../components/notes/NoteScreen';
import { activeNote } from '../../../actions/notes';

jest.mock('../../../actions/notes', () => ({
    activeNote: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    },
    notes: {
        active: {
            id: '123456',
            title: 'hola',
            body: 'mundo',
            date: 221455365
        },
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(

    <Provider store={store}>
        <NoteScreen />
    </Provider>
);

describe('Pruebas en el componente funcional de "<NoteScreen />."', () => {

    test('Debe de renderizarse correctamente y hacer match con el snapshot. ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('La acción de "activeNote" debe dispararse correctamente.', () => {

        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'orozco se la come'
            }
        });

        expect(activeNote).toHaveBeenCalled();

    });

});