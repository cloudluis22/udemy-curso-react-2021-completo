import React from 'react';
import { mount } from 'enzyme';
import { DashboardRoutes } from '../../routers/DashboardRoutes';
import AuthContext from '../../auth/AuthContext';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en el componente de "<DashboardRoutes />."', () => {

    test('Debe de mostrarse correctamente.', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Hola'
            }
        }

        const wrapper = mount(

            <AuthContext.Provider value={contextValue}>

                <MemoryRouter>

                    <DashboardRoutes />

                </MemoryRouter>

            </AuthContext.Provider>

        );

        expect(wrapper).toMatchSnapshot();

    });

});