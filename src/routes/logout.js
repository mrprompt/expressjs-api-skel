/**
 * Logout Route
 *
 * POST		/logout/
 *
 * @author  Thiago Paes <mrprompt@gmail.com>
 * @license MIT
 */
'use strict';

var router      = require('express').Router();
var controller  = require(__dirname + '/../controllers/LogoutController');

router.post('/', controller.logout);

module.exports = router;
