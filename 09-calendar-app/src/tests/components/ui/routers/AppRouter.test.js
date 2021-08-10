import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

import '@testing-library/jest-dom';
import { AppRouter } from '../../../../components/routers/AppRouter';


Enzyme.configure({ adapter: new Adapter() });

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

describe('Pruebas en el componente de "<AppRouter />."', () => {

    test('El componente debe renderizarse correctamente y generar la snapshot. ', () => {

        const initState = {
            auth: {
                checking: true
            }
        };

        const store = mockStore(initState);

        const wrapper = mount(
            <Provider store={ store }>
                <AppRouter />
            </Provider>
        );

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar la ruta pública si no está autenticado.', () => {

        const initState = {
            auth: {
                checking: false,
                uid: null
            }
        };

        const store = mockStore(initState)

        const wrapper = mount(
            <Provider store={ store }>
                <AppRouter />
            </Provider>
        );

        expect(wrapper.find('.login-container').exists()).toBe(true);

    });

    test('Debe de mostrar la ruta priva si está autenticado.', () => {

        const initState = {
            ui: {
                modalOpen: false
            },
            calendar: {
                events: []
            },
            auth: {
                checking: false,
                uid: '123',
                name: 'Test Man'
            }
        };

        const store = mockStore(initState)

        const wrapper = mount(
            <Provider store={ store }>
                <AppRouter />
            </Provider>
        );

        expect(wrapper.find('.calendar-screen').exists()).toBe(true);

    });

});