import { types } from '../types/types';

/* id: new Date().getTime(),
        title: 'RTX 3060 Ti',
        startDate: moment().toDate(),
        endDate: moment().add(2, 'hours').toDate(),
        bgcolor: '#fafafa',
        notes: 'Comprar una RTX 3060 Ti',
        user: {
            id: '12345',
            name: 'Peter Parker'
        }
    }*/

const initialState = {
    events: [],
    activeEvent: null
};

export const calendarReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }

        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }

        case types.eventClearActive:
            return {
                ...state,
                activeEvent: null
            }

        case types.eventUpdated:
            return {
                ...state,
                events: state.events.map(
                    evt => (evt.id === action.payload.id ) ? action.payload : evt
                )
            }

            case types.eventDeleted:
                return {
                    ...state,
                    events: state.events.filter(
                        evt => (evt.id !== state.activeEvent.id)
                    ),
                    activeEvent: null
                }

        case types.eventsLoaded:
            return {
                ...state,
                events: [...action.payload]
            };

        case types.eventLogoutCleaning:
            return {
                ...initialState
            }

        default:
            return state;
    }

}