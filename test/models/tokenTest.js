/**
 * Token Model Test Suite
 *
 * @author  Thiago Paes <mrprompt@gmail.com>
 * @license MIT
 */
'use strict';

var Token = require('../../src/models/token');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var should = require('should');

describe('Token Model', function () {
    it('retorna vazio ao iniciar sem parâmetros', function (done) {
        var token = new Token();

        should(token.isNew).is.exactly(true);

        done();
    });

    it('deve retornar as propriedades com os valores passados como parâmetros', function (done) {
        var dados = {
            cadastro: new Date()
        };

        var token = new Token(dados);
            token.should.have.property('cadastro', dados.cadastro);

        should(token.isNew).is.exactly(true);

        done();
    });
});