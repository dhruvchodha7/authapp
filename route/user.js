const express = require('express');
const router  = express.Router();
const { registerScreen, login } = require('../controller/userController')

router.route('/register').get(registerScreen);
router.route('/register').post(register);

router.route('/login').get(login);

module.exports = router;