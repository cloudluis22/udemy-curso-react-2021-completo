import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Swal from 'sweetalert2';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

import { LoginScreen } from '../../../../components/auth/LoginScreen';

import '@testing-library/jest-dom';
import { startLogin, startRegister } from '../../../../actions/auth';


jest.mock('../../../../actions/auth', () => ({
    startLogin: jest.fn(),
    startRegister: jest.fn()
}));

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}));

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const initState = {};
const store = mockStore(initState);

store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <LoginScreen />
    </Provider>
);

describe('Pruebas en el componente de "<LoginScreen />".', () => {


    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Debe de mostrarse correctamente.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de llamar el dispatch de el login.', () => {

        wrapper.find('input[name="lEmail"]').simulate('change', {
            target: {
                name: 'lEmail',
                value: 'bennyuwo@hotmail.com'
            }
        });

        wrapper.find('input[name="lPassword"]').simulate('change', {
            target: {
                name: 'lPassword',
                value: '123456'
            }
        });

        wrapper.find('form').at(0).prop('onSubmit')({
            preventDefault(){}
        });

        expect(startLogin).toHaveBeenCalledWith('bennyuwo@hotmail.com', '123456');

    });

    test('Debe de prohibír el registro si las contraseñas son diferentes.', () => {


        wrapper.find('input[name="rEmail"]').simulate('change', {
            target: {
                name: 'rEmail',
                value: 'test@hotmail.com'
            }
        });

        wrapper.find('input[name="rPassword"]').simulate('change', {
            target: {
                name: 'rPassword',
                value: '123456'
            }
        });

        wrapper.find('input[name="rPassword2"]').simulate('change', {
            target: {
                name: 'rPassword2',
                value: '12345678'
            }
        });

        wrapper.find('form').at(1).prop('onSubmit')({
            preventDefault(){}
        });

        expect(startRegister).not.toHaveBeenCalled();
        expect(Swal.fire).toHaveBeenCalledWith('Error', 'Las contraseñas tienen que coincidir.', 'error');

    });

    test('Debe de funcionar el registro con contraseñas iguales.', () => {

        wrapper.find('input[name="rEmail"]').simulate('change', {
            target: {
                name: 'rEmail',
                value: 'test@hotmail.com'
            }
        });

        wrapper.find('input[name="rPassword"]').simulate('change', {
            target: {
                name: 'rPassword',
                value: '123456'
            }
        });

        wrapper.find('input[name="rPassword2"]').simulate('change', {
            target: {
                name: 'rPassword2',
                value: '123456'
            }
        });

        expect(Swal.fire).not.toHaveBeenCalled();

    });

});