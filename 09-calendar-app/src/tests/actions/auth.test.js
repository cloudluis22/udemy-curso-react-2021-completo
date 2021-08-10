import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Swal from 'sweetalert2';
import { startChecking, startLogin, startRegister } from '../../actions/auth';
import { types } from '../../types/types';
import * as fetchModule from '../../helpers/fetch';

import '@testing-library/jest-dom';

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const initState = {};
let store = mockStore(initState);

Storage.prototype.setItem = jest.fn();

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}));

describe('Pruebas en las acciones de "auth".', () => {

    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    });

    test('"startLogin" debe de funcionar correctamente.', async () => {

        await store.dispatch(startLogin('bennyuwo@hotmail.com', '123456'));
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload: {
                uid: expect.any(String),
                name: expect.any(String)
            }
        });

        expect(localStorage.setItem).toHaveBeenCalledWith('token', expect.any(String));
        expect(localStorage.setItem).toHaveBeenCalledWith('token-init-date', expect.any(Number))

    });

    test('"startLogin" debe de funcionar de forma esperada a un login incorrecto.', async () => {

        await store.dispatch(startLogin('notcorrect@hotmail.com', '1234567890'));
        const actions = store.getActions();

        expect(actions).toEqual([]);
        expect(Swal.fire).toHaveBeenCalled();

    });

    test('"startRegister" debe registrar correctamente.', async () => {

        fetchModule.fetchNoToken = jest.fn(() => ({
            json() {
                return {
                    ok: true,
                    uid: '123',
                    name: 'test'
                };
            }
        }));

        await store.dispatch( startRegister('test@testing.com', '1234567', 'test') );
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload: {
                uid: '123',
                name: 'test'
            }
        });

    });

    test('"startChecking" debe funcionar correctamente.', async () => {

        fetchModule.fetchToken = jest.fn(() => ({
            json() {
                return {
                    ok: true,
                    uid: '123',
                    name: 'test'
                };
            }
        }));

        await store.dispatch( startChecking() );

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.authLogin,
            payload: {
                uid: '123',
                name: 'test'
            }
        });

        expect(localStorage.setItem).toHaveBeenCalled();

    });

});