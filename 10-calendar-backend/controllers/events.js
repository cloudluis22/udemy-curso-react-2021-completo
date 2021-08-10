const { response } = require('express');
const Event = require('../models/Event-model');

const getEvents = async (request, response = response) => {

    const events = await Event.find()
        .populate('user', 'name');

    response.json({
        ok: true,
        events
    });
};

const createEvent = async (request, response = response) => {

    const event = new Event(request.body);

    try {

        event.user = request.uid;

        const savedEvent = await event.save();

        response.json({
            ok: true,
            event: savedEvent
        });

    } catch (error) {
        console.log(error);
        response.status(500).json({
            ok: false,
            msg: 'Unexpected error, please contact the admin.'
        });
    };

};

const updateEvent = async (request, response = response) => {

    const eventId = request.params.id;
    const uid = request.uid;

    try {

        const event = await Event.findById(eventId);

        if (!event) {
           return response.status(404).json({
                ok: false,
                msg: 'Event not found with given ID.'
            });
        };

        if (event.user.toString() !== uid) {
            console.log(event.user.toString());
            return response.status(401).json({
                ok: false,
                msg: 'Not enough privileges to modifiy this event.'
            });
        };

        const newEvent = {
            ...request.body,
            user: uid
        };

        const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, { new: true, useFindAndModify: false });

        response.json({
            ok: true,
            event: updatedEvent
        });

    } catch (error) {
        console.log(error);
        response.status(500).json({
            ok: false,
            msg: 'Unexpected error, please contact the admin.'
        });
    };

};

const deleteEvent = async (request, response = response) => {

    const eventId = request.params.id;
    const uid = request.uid;

    try {

        const event = await Event.findById(eventId);


        if (!event) {
           return response.status(404).json({
                ok: false,
                msg: 'Event not found with given ID.'
            });
        };

        if (event.user.toString() !== uid) {
            return response.status(401).json({
                ok: false,
                msg: 'Not enough privileges to delete this event.'
            });
        };

        await Event.findByIdAndDelete(eventId);

        response.json({
            ok: true,
            msg: 'Event deleted'
        });

    } catch (error) {
        console.log(error);
        response.status(500).json({
            ok: false,
            msg: 'Unexpected error, please contact the admin.'
        });
    }


};

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
};