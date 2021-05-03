/*
    path: api/login
*/

const { Router } = require('express');
const { crearUsuario, login, renewToken } = require('../controllers/auth');
const { check } = require('express-validator');

const router = Router();

router.post('/new', crearUsuario)

// Login
router.post('/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty()
], login)

// Revalidar token
router.post('/renew', renewToken)

module.exports = router;