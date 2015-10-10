/**
 * Usuario Model Test Suite
 *
 * @author  Thiago Paes <mrprompt@gmail.com>
 * @license MIT
 */
'use strict';

var Usuario = require('../../src/models/usuario');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var should = require('should');

describe('Usuario Model', function () {
    it('retorna vazio ao iniciar sem parâmetros', function (done) {
        var usuario = new Usuario();

        should(usuario.isNew).is.exactly(true);

        done();
    });

    it('deve retornar as propriedades com os valores passados como parâmetros', function (done) {
        var dados = {
            cadastro: new Date()
        };

        var usuario = new Usuario(dados);
            usuario.should.have.property('cadastro', dados.cadastro);

        should(usuario.isNew).is.exactly(true);

        done();
    });
});