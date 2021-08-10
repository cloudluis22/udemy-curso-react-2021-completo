import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { JournalEntry } from '../../../components/journal/JournalEntry';

/*jest.mock('../../../actions/auth', () => ({
    startLogout: jest.fn(),
}));*/

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);
store.dispatch = jest.fn();

const note = {
    id: 10432413,
    date: 123231,
    title: 'hola',
    body: 'mundo',
    url: 'https://linkdetesteo.com/foto.jpg'
}
const wrapper = mount(

    <Provider store={store}>
        <JournalEntry {...note} />
    </Provider>
);


describe('Pruebas en el componente funcional de "<JournalEntry />".', () => {

    test('Debe de renderizarse correctamente y hacer match con el snapshot.', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de activar la nota al hacer click.', () => {

        wrapper.find('.journal__entry').simulate('click');

        expect(store.dispatch).toHaveBeenCalled();

    });

});