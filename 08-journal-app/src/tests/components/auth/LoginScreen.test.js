import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import LoginScreen from '../../../components/auth/LoginScreen';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

jest.mock('../../actions/auth', () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null
    }
};

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(

    <Provider store={store}>
        <MemoryRouter>
            <LoginScreen />
        </MemoryRouter>
    </Provider>
)

describe('Pruebas en el componente funcional de "<LoginScreen />".', () => {

    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
     });

    test('El componente debe renderizarse correctamente y crear una snapshot.', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('La acción de "startGoogleLogin" debe dispararse correctamente.', () => {

        wrapper.find('.google-btn').prop('onClick')();
        expect(startGoogleLogin).toHaveBeenCalled();

    });

    test('La acción de "startLoginEmailPassword" debe dispararse correctamente.', () => {

        // Simulando el llenado de el formulario.
        wrapper.find('input[name="email"]').simulate('change', {
            target: {
                name: 'email',
                value: 'testing@testing.com'
            }
        });

        wrapper.find('input[name="password"]').simulate('change', {
            target: {
                name: 'password',
                value: '123456'
            }
        });

        wrapper.find('form').prop('onSubmit')({ preventDefault(){} });
        expect(startLoginEmailPassword).toHaveBeenCalled();

    });

});
