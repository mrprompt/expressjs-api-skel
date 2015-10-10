/**
 * Login rote
 *
 * POST 	/login/
 *
 * @author  Thiago Paes <mrprompt@gmail.com>
 * @license MIT
 */
'use strict';

var router     = require('express').Router();
var controller = require(__dirname + '/../controllers/LoginController');

router.post('/', controller.adiciona);

module.exports = router;
