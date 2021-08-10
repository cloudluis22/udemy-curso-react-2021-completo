import { authReducer } from "../../reducers/authReducer";
import types from "../../types/types";


describe('Pruebas en el reducer de "authReducer".', () => {

    test('Debe de retornar el estado (objeto vacío) al introducir una acción invalida.', () => {

        // Mandando un objeto vacío como estado inicial y acción
        const state = authReducer({}, {});
        expect(state).toEqual({});

    });

    test('Debe de retornar un objeto el UID y el display name al hacer una acción de tipo login.', () => {

        const action = {
            type: types.login,
            payload: {
                uid: '12345678910666',
                displayName: 'BennyUwo'
            }
        }

        const state = authReducer({}, action);

        expect(state).toEqual({
            uid: '12345678910666',
            name: 'BennyUwo'
        });

    });

    test('Debe de retornar un objeto vacío al realizar una acción de tipo logout.', () => {

        const initialState = {
            uid: '1234556',
            name: 'Yexhz'
        }

        const action = {
            type: types.logout
        }

        const state = authReducer(initialState, action);

        // Esperar un objeto vacío.
        expect(state).toEqual({});

    });

});
