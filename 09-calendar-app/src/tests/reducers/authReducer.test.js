import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

const initialState = {
    checking: true
}

describe('pruebas en el reducer de "authReducer".', () => {

    test('Debe de retornar el estado por defecto.', () => {

        const state = authReducer(initialState, {})

        expect(state).toEqual(initialState);

    });

    test('Despues de iniciar sesión debe cambiar el estado correctamente.', () => {

        const user = {
            uid: 'ABC123TESTING',
            name: 'Testing Man'
        }

        const action = {
            type: types.authLogin,
            payload: user
        }

        const state = authReducer(initialState, action)

        expect(state).toEqual({
            checking: false,
            uid: 'ABC123TESTING',
            name: 'Testing Man'
        });
    });

    test('Despues de hacer logout debe actualizar el estado correctamente.', () => {

        const action = {
            type: types.authLogout
        }

        const state = authReducer(initialState, action);
        expect(state).toEqual( { checking: false } );

    });

});
