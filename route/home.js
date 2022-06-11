const express = require('express');
const router  = express.Router();
const { index, dashboard } = require('../controller/homeController');

router.route('/').get(index);

router.route('/dashboard').get(dashboard);

module.exports = router;