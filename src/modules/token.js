/**
 * Token Module
 *
 * @author  Thiago Paes <mrprompt@gmail.com>
 * @license MIT
 */
'use strict';

/**
 * @todo Mover rotas para arquivo de configuração
 */
var router = require('express').Router();
var routes = [
    '/usuario|GET',
    '/usuario|PUT',
    '/usuario|DELETE',
];

router.all('*', function(req, res, next) {
    if (req.method === 'OPTIONS') {
        next();

        return true;
    }

    if (_.contains(routes, req.baseUrl + '|' + req.method)) {
        if (!req.headers.authorization) {
            return res.status(500).json({
                object: 'object',
                has_more: false,
                data: {
                    message: 'Atributo authorization não encontrado no cabeçalho',
                    status: 500
                },
                itemCount: 0,
                pageCount: 1
            });
        }

        var TokenModel = require(__dirname + '/../models/token');

        TokenModel.findOne({
            conteudo: req.headers.authorization
        })
            .exec(function (err, data) {
                if (err || !data) {
                    res.status(403).json({
                        object: 'object',
                        has_more: false,
                        data: {
                            message: 'Token não autorizado',
                            status: 403
                        },
                        itemCount: 0,
                        pageCount: 1
                    });

                    return false;
                }

                req.params.usuario = data.usuario;

                next();
            });

        return false;
    } else {
        next();
    }
});

module.exports = router;