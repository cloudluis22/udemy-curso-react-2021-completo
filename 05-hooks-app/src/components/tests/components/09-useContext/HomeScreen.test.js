import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { HomeScreen } from '../../../09-useContext/HomeScreen';
import { UserContext } from '../../../09-useContext/UserContext';

describe('Pruebas en el componente funciona de "<HomeScreen />".', () => {

    const user = {
        user: 'cloudluis22',
        email: 'cloudluis22@hotmail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <HomeScreen />
        </UserContext.Provider>
    )




    test('Debe de mostrarse correctamente y generar una snapshot.', () => {

        expect(wrapper).toMatchSnapshot();

    });

});