import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en el componente de "<PrivateRoute />".', () => {

    // Props ficticias.
    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('Debe de mostrar el componente SOLO si está autenticado.', () => {

        const wrapper = mount(
            <MemoryRouter>

                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span> Componente de prueba </span>}
                    {...props}
                />

            </MemoryRouter>
        )

        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');

    });

    test('No debe de mostrar el componente si NO está autenticado.', () => {

        const wrapper = mount(
            <MemoryRouter>

                <PrivateRoute
                    isAuthenticated={false}
                    component={() => <span> Componente de prueba </span>}
                    {...props}
                />

            </MemoryRouter>
        )

        expect(wrapper.find('span').exists()).toBe(false);

    });

});