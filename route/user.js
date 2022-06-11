const express = require('express');
const router  = express.Router();
const { registerScreen, register,  login } = require('../controller/userController')

router.route('/register').get(registerScreen);
router.route('/register').post(register);

router.route('/login').get(loginScreen);
router.route('/login').post(login);

module.exports = router;