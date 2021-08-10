/*
    Auth Routes
    /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { userCreate, userLogin, tokenRevalidate } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.post(
    '/new',
    [
        check('name', 'Name is required.').not().isEmpty(),
        check('email', 'Incorrect e-mail / not included.').isEmail(),
        check('password', 'Password must be at least 6 characters.').isLength({ min: 6 }),
        validateFields
    ],
    userCreate
);

router.post(
    '/',
    [
        check('email', 'Incorrect e-mail / not included.').isEmail(),
        check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
        validateFields
    ],
    userLogin
);

router.get('/renew', validateJWT, tokenRevalidate);

module.exports = router;