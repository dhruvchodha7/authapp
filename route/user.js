const express = require('express');
const router  = express.Router();
const { registerScreen, register,  login, loginScreen } = require('../controller/userController')
const nodemailer = require('nodemailer');
router.route('/register').get(registerScreen);
router.route('/register').post(register);

router.route('/login').get(loginScreen);
router.route('/login').post(login);

var transporter = nodemailer.create

module.exports = router;