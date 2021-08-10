import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

import { DeleteEventFab } from '../../../components/ui/DeleteEventFab';

import '@testing-library/jest-dom';
import { eventStartDelete } from '../../../actions/events';

jest.mock('../../../actions/events', () => ({
    eventStartDelete: jest.fn()
}));

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const initState = {};
const store = mockStore(initState);

store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <DeleteEventFab />
    </Provider>
);

describe('Pruebas en el componente de "<DeleteEventFab/>."', () => {

    test('Debe de mostrarse correctamente.', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('La función "eventStartDelete" debe de llamarse correctamente al hacer click.', () => {

        wrapper.find('button').simulate('click');
        expect(eventStartDelete).toHaveBeenCalled();

    })

});
