import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../components/login/LoginScreen';
import AuthContext from '../../../auth/AuthContext';

describe('Pruebas en el componente de "<LoginScreen />".', () => {

    const contextValue = {
        user: 'José Luis',
        dispatch: jest.fn()
    }

    const historyMock = {
        replace: jest.fn()
    }

    const wrapper = mount(

        <AuthContext.Provider value={ contextValue }>
            <LoginScreen history={ historyMock } />
        </AuthContext.Provider>

    );

    test('Debe de mostrarse correctamente y generar la snapshot.', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de realizar el dispatch del reducer y la navegación.', () => {

        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalled();
        expect(historyMock.replace).toHaveBeenCalled();

    });

});