import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { db } from '../../firebase/firebaseConfig'

import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth";
import types from '../../types/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('Pruebas en las acciones de "auth".', () => {

    beforeEach(() => {
       store = mockStore(initState)
    });


    test('Las funciones de "login" y "logout" deben de crear la acción respectiva.', () => {

        const uid = '123456';
        const name = 'Isaac';

        const loginAction = login(uid, name);
        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid: '123456',
                displayName: 'Isaac'
            }
        })

        const logoutAction = logout();
        expect(logoutAction).toEqual({
            type: types.logout
        });

    });

    test('La acción de "startLogout" debe ejecutarse correctamente.', async () => {

        await store.dispatch( startLogout() );
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.logout
        });

        expect(actions[1]).toEqual({
            type: types.notesLogoutCleaning
        });

    });

    test('La acción de "startLoginEmailPassword" debe ejecutarse correctamente.', async () => {

        await store.dispatch( startLoginEmailPassword('testing@testing.com', '123456') );
        const actions = store.getActions();

        expect(actions[1]).toEqual({
            type: types.login,
            payload: {
                uid: 'xLO6zznsZqZyOTfnhpm4v0hqrjl1',
                displayName: null
            }
        })

    });

});