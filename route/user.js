const express = require('express');
const { router } = require("../app");
const { register, login } = require('../controller/userController')
router.route('/register').get(register);

router.route('/login').get(login);

module.exports = router;