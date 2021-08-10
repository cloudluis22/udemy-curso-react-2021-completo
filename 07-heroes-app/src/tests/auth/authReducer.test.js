
import authReducer from "../../auth/authReducer";
import types from "../../types/types";

describe('Pruebas sobre el reducer de "authReducer".', () => {


    test('Debe de retornar el estado por defecto.', () => {

        const defaultState = { logged: false }

        const state = authReducer( defaultState, {} );

        expect(state).toEqual(defaultState);

    });

    test('Debe de autenticar y colocar el nombre del usuario.', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Jose Luis'
            }
        }

        const state = authReducer( { logged: false }, action);

        expect(state).toEqual( { name: 'Jose Luis', logged: true } );

    });

    test('Debe de eliminar el nombre de el usuario y quitar la sesión.', () => {

        const action = {
            type: types.logout
        }

        const state = authReducer( { name: 'Jose Luis', logged: true }, action);

        expect(state).toEqual( { logged: false } );

    });


});
