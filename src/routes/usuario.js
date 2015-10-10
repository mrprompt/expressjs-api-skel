/**
 * Usuario Route
 *
 * GET 		/usuario/
 * GET 		/usuario/:id
 * POST 	/usuario/
 * PUT 		/usuario/:id
 * DELETE 	/usuario/:id
 *
 * @author  Thiago Paes <mrprompt@gmail.com>
 * @license MIT
 */
'use strict';

var router      = require('express').Router();
var controller  = require(__dirname + '/../controllers/UsuarioController');

router.get('/', controller.lista);
router.get('/:id', controller.abre);
router.post('/', controller.adiciona);
router.put('/:id', controller.atualiza);
router.delete('/:id', controller.apaga);

module.exports = router;
