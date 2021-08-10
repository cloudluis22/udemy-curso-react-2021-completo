import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import RegisterScreen from '../../../components/auth/RegisterScreen';
import types from '../../../types/types';

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

const wrapper = mount(

    <Provider store={ store }>
        <MemoryRouter>
            <RegisterScreen />
        </MemoryRouter>
    </Provider>
)

describe('Pruebas en el componente funcional de "<RegisterScreen />".', () => {

    test('El componente debe renderizarse correctamente y hacer match con la snapshot.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('El componente debe mostrar el cuadro de error al introducir un e-mail NO valido.', () => {

        wrapper.find('input[name="name"]').simulate('change', {
            target: {
                value: 'Holaa',
                name: 'name'
            }
        });

        wrapper.find('input[name="email"]').simulate('change', {
            target: {
                value: '', // Campo vacío.
                name: 'email'
            }
        });

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.uiSetError,
            payload: 'email is not valid'
        });

    });

});
