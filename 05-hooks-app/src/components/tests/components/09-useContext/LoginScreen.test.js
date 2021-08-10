import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../../09-useContext/LoginScreen';
import { UserContext } from '../../../09-useContext/UserContext';

const setUser = jest.fn();

describe('Pruebas en el componente funciona de "<LoginScreen />".', () => {

    const user = {
        user: 'cloudluis22',
        email: 'cloudluis22@hotmail.com'
    }

    const wrapper = mount(

        <UserContext.Provider value={{setUser}}>
            <LoginScreen />
        </UserContext.Provider>

    );

    test('Debe de mostrarse correctamente.', () => {

        expect(wrapper).toMatchSnapshot();

        wrapper.find('button').prop('onClick')();

        expect(setUser).toHaveBeenCalledWith({
            id: 123456,
            name: 'Cloudluis22',
            email: 'cloudluis22@hotmail.com'
        })

    });

});