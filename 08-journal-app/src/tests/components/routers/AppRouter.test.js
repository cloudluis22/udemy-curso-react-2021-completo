import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { firebase } from '../../../firebase/firebaseConfig';
import { login } from '../../../actions/auth';
import { act } from '@testing-library/react';
import AppRouter from '../../../components/routers/AppRouter';

jest.mock('../../../actions/auth', () => ({
    login: jest.fn()
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

describe('Pruebas en el componente funcional de "<AppRouter />".',  () => {

    test('Debe de llamar al login del usuario una vez este autenticado.', async () => {

        let user;

        await act( async () => {

            const userCred = await firebase.auth().signInWithEmailAndPassword('testing@testing.com', '123456');

            const wrapper = mount(

                <Provider store={store}>
                    <MemoryRouter>
                        <AppRouter />
                    </MemoryRouter>
                </Provider>
            );

        });

        expect(login).toHaveBeenCalled();
    });


});