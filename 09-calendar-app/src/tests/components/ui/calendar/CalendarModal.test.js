import React from 'react';
import Modal from 'react-modal';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import moment from 'moment';
import DateTimePicker from 'react-datetime-picker/dist/DateTimePicker';
import { act } from '@testing-library/react'
import Swal from 'sweetalert2';

import '@testing-library/jest-dom';

import { eventStartUpdate, eventClearActive, eventStartAddNew } from '../../../../actions/events';
import { CalendarModal } from '../../../../components/calendar/CalendarModal';

HTMLCanvasElement.prototype.getContext = () => { };

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}));

jest.mock('../../../../actions/events', () => ({
    eventStartUpdate: jest.fn(),
    eventClearActive: jest.fn(),
    eventStartAddNew: jest.fn()
}));

Storage.prototype.setItem = jest.fn();

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const end = moment(now).clone().add(1, 'hours');

const initState = {
    calendar: {
        events: [],
        activeEvent: {
            title: 'Hola',
            notes: 'test',
            startDate: now.toDate(),
            endDate: end.toDate()
        }
    },
    auth: {
        uid: '123',
        name: 'Test'
    },
    ui: {
        modalOpen: true
    }
};
const store = mockStore(initState);

store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <CalendarModal />
    </Provider>
);

describe('Pruebas en el componente <CalendarModal/>.', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('El modal debe mostrarse según el estado.', () => {
        expect(wrapper.find(Modal).prop('isOpen')).toBe(true);
    });

    test('Debe de llamar la acción de cerrar y actualizar.', () => {

        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        });

        expect(eventStartUpdate).toHaveBeenCalledWith( initState.calendar.activeEvent );
        expect(eventClearActive).toHaveBeenCalled();

    });

    test('Debe mostrar error si falta el título.', () => {

        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        });

        expect(wrapper.find('input[name="title"]').hasClass('is-invalid')).toBe(true);

    });

    test('Debe de crear un nuevo evento.', () => {

        const initState = {
            calendar: {
                events: [],
                activeEvent: null
            },
            auth: {
                uid: '123',
                name: 'Test'
            },
            ui: {
                modalOpen: true
            }
        };
        const store = mockStore(initState);

        store.dispatch = jest.fn();

        const wrapper = mount(
            <Provider store={store}>
                <CalendarModal />
            </Provider>
        );

        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'test'
            }
        });

        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        });

        expect(eventStartAddNew).toHaveBeenCalledWith({
            endDate: expect.anything(),
            startDate: expect.anything(),
            title: 'test',
            notes: ''
        });

        expect(eventClearActive).toHaveBeenCalled();

    });

    test('Debe de validar las fechas.', () => {

        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: 'title',
                value: 'test'
            }
        });

        const today = new Date();

        act(() => {
            wrapper.find(DateTimePicker).at(1).prop('onChange')(today);
        });

        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        expect(Swal.fire).toHaveBeenCalledWith("Oops!", "¡La fecha final debe ser mayor a la de inicio!", "error");

    });

});