import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Calendar } from 'react-big-calendar';
import { act } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';

import { types } from '../../../../types/types';
import { messages } from '../../../../helpers/calendar-es';
import { CalendarScreen } from '../../../../components/calendar/CalendarScreen';
import { eventSetActive, eventStartLoading } from '../../../../actions/events';

import '@testing-library/jest-dom';

jest.mock('../../../../actions/events', () => ({
    eventSetActive: jest.fn(),
    eventStartLoading: jest.fn()
}));

Storage.prototype.setItem = jest.fn();

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);

const initState = {
    calendar: {
        events: []
    },
    auth: {
        uid: '123',
        name: 'Test'
    },
    ui: {
        openModal: false
    }
};
const store = mockStore(initState);

store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <CalendarScreen />
    </Provider>
);

describe('Pruebas en el componente de <CalendarScreen />.', () => {

    test('Debe de mostrarse correctamente.', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Pruebas con las interacciones de el calendario.', () => {

        const calendar = wrapper.find(Calendar);

        const calendarMessages = calendar.prop('messages');
        expect(calendarMessages).toEqual(messages);

        calendar.prop('onDoubleClickEvent')();
        expect(store.dispatch).toHaveBeenCalledWith( { type: types.uiOpenModal } );

        calendar.prop('onSelectEvent')( { start: 'test' } )
        expect(eventSetActive).toHaveBeenCalledWith( { start: 'test' } );

        act(() => {

            calendar.prop('onView')('week');
            expect(localStorage.setItem).toHaveBeenCalledWith('lastView', 'week');

        });

    });

});