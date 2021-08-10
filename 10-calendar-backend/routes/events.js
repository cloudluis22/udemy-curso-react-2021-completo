/*
    Event Routes
    /api/events
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

// Todas las rutas tienen que pasar por la validación del JWT (middleware).
router.use(validateJWT);

// Obtener los eventos.
router.get('/', getEvents);

// Crear un nuevo evento.
router.post(
    '/',
    [
        check('title', 'Title is required.').notEmpty(),
        check('start', 'Start date is required').custom(isDate),
        check('end', 'End date is required').custom(isDate),
        validateFields
    ],
    createEvent
);

// Actualizar un evento.
router.put(
    '/:id',
    [
        check('title', 'Title is required.').notEmpty(),
        check('start', 'Start date is required').custom(isDate),
        check('end', 'End date is required').custom(isDate),
        validateFields
    ],
    updateEvent
);

// Borrar un evento
router.delete('/:id', deleteEvent);

module.exports = router;