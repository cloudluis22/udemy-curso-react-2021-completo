import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import Swal from "sweetalert2";
import { convertEvents } from "../helpers/convertEvents";
import { fetchToken } from "../helpers/fetch";
import { types } from "../types/types";

export const eventStartAddNew = (event) => {
    return async ( dispatch, getState ) => {

        const { uid, name } = getState().auth;

        try {
            const dbEvent = {
                ...event,
                start: event.startDate,
                end: event.endDate
            }

            const response = await fetchToken('events', dbEvent, 'POST');
            const body = await response.json();

            if (body.ok) {
                event.id = body.event.id
                event.user = {
                    _id: uid,
                    name: name
                }
                console.log(event);
                dispatch( eventAddNew(event) );
            }

        } catch (error) {
            console.log(error)
        }

    };
};

export const eventStartLoading = () => {
    return async (dispatch) => {

        try {
            const response = await fetchToken('events');
            const body = await response.json();

            const events = convertEvents(body.events);
           dispatch( eventsLoaded( events ) );

        } catch (error) {

        }

    };
};

export const eventStartUpdate = (event) => {
    return async (dispatch) => {

        try {

            const response = await fetchToken(`events/${event.id}`, event, 'DELETE');
            const body = await response.json();

            if (body.ok) {
                dispatch( eventUpdated(event) );
            }
            else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error);
        };

    };
};

export const eventStartDelete = () => {


    return async (dispatch, getState) => {
        try {

            const { id } = getState().calendar.activeEvent;

            const response = await fetchToken(`events/${id}`, {}, 'delete');
            const body = await response.json();

            if (body.ok) {
                dispatch( eventDeleted() );
            }
            else {
                Swal.fire('Error', body.msg, 'error');
            }

        } catch (error) {
            console.log(error);
        };

    };
}

export const eventLogoutCleaning = () => ({ type: types.eventLogoutCleaning });

const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
});

export const eventClearActive = () => ({
    type: types.eventClearActive
});

const eventUpdated = ( event ) => ({
    type: types.eventUpdated,
    payload: event
});

const eventDeleted = () => ({
    type: types.eventDeleted
});

const eventsLoaded = (events) => ({ type: types.eventsLoaded, payload: events });