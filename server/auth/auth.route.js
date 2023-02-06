const express = require('express');
const ctrl = require('./auth.controller');

const router = express.Router();

router.route('/validate-token', ctrl.validateToken);

module.exports = router;
