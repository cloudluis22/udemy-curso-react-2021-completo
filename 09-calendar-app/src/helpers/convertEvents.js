import moment from 'moment';

export const convertEvents = (events) => {


    const newEvents = events.map((event) => ({
        ...event,
        startDate: moment(event.start).toDate(),
        endDate: moment(event.end).toDate(),
    }));

    delete newEvents.start;
    delete newEvents.end;

    return newEvents;

}