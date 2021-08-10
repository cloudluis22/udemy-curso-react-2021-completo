import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-es'
import { CalendarEvent } from './CalendarEvent';

import { CalendarModal } from './CalendarModal';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { uiOpenModal } from '../../actions/ui';
import { eventClearActive, eventSetActive, eventStartLoading } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector(state => state.calendar);
    const { uid } = useSelector(state => state.auth);

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    useEffect(() => {

        dispatch( eventStartLoading() );

    }, [dispatch]);

    const onDoubleClick = (evt) => {
        dispatch( uiOpenModal() );
    }

    const onSelectEvent = (evt) => {
        dispatch( eventSetActive(evt) );
    }

    const onViewChange = (evt) => {
        setLastView(evt);
        localStorage.setItem('lastView', evt)
    }

    const onSelectSlot = () => {
        dispatch( eventClearActive() );
    }

    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: ( uid === event.user._id ) ? '#367CF7' : '#465660',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }

        return {
            style
        }

    }

    return (
        <div className="calendar-screen">
            <Navbar />

            <Calendar
                localizer={localizer}
                events={ events }
                startAccessor="startDate"
                endAccessor="endDate"
                messages={messages}
                eventPropGetter={ eventStyleGetter }
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelectEvent }
                onView={onViewChange}
                view={lastView}
                onSelectSlot={ onSelectSlot }
                selectable={ true }
                components={ { event: CalendarEvent } }
            />

            <AddNewFab />
            {
                (activeEvent) &&
                <DeleteEventFab/>
            }

            <CalendarModal />

        </div>
    );
};