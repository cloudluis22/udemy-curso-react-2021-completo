import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { Sidebar } from '../../../components/journal/Sidebar';
import { startLogout } from '../../../actions/auth';
import { startNewNote } from '../../../actions/notes';

jest.mock('../../../actions/auth', () => ({
    startLogout: jest.fn(),
}));

jest.mock('../../../actions/notes', () => ({
    startNewNote: jest.fn()
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
        },
        notes: []
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(

    <Provider store={store}>
        <Sidebar />
    </Provider>
);

describe('Pruebas en el componente funcional de "<Sidebar />"', () => {

    beforeEach(() => {
        store = mockStore(initState);
    });

    test('Debe de renderizarse correctamente.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de llamarse la acción de "startLogout" correctamente.', () => {

        wrapper.find('button').simulate('click');
        expect(startLogout).toHaveBeenCalled();

    });

    test('Debe de llamarse correctamente la acción de "startNewNote".', () => {

        wrapper.find('.journal__new-entry').simulate('click');
        expect(startNewNote).toHaveBeenCalled();

    });

});
