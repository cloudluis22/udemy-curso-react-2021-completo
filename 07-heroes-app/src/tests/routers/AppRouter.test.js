import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../routers/AppRouter';
import AuthContext from '../../auth/AuthContext';

describe('', () => {

    test('Debe de mostrar el login si el usuario no está autenticado. ', () => {

        // Simulación del contexto.
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: false
            }
        }


        const wrapper = mount(

            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>

        )

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar especificamente el componente de Marvel si está autenticado.', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Hola'
            }
        }

        const wrapper = mount(

            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>

        )

        expect(wrapper.find('.navbar').exists()).toBe(true);

    });

});