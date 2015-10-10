/**
 * Usuario Controller Test Suite
 *
 * @author  Thiago Paes <mrprompt@gmail.com>
 * @license MIT
 */
'use strict';

var connection  = require('../test');
var Usuario = require('../../src/controllers/UsuarioController');
var sinon = require('sinon');
var assert = require('assert');
var request = require('request');
var response = {
    content: null,
    statusCode: 0,

    json: function(content){
        this.content = content;

        return this;
    },
    status: function(status) {
        this.statusCode = status;

        return this;
    }
};

describe('Usuario Controller', function () {
    it('#lista() deve retornar um array', function (done) {
        request.headers = {};

        request.params = { };

        request.query = {
            page : 1,
            limit: 1
        };

        Usuario.lista(request, response, function() {
            assert.equal(response.content.object, 'list');

            done();
        });
    });

    it('#abre() deve retornar um objeto', function (done) {
        request.headers = { };

        request.params = {
            id: 1
        };

        request.query = {
            page : 1,
            limit: 1
        };

        Usuario.abre(request, response, function() {
            assert.equal(response.content.object, 'error');
            assert.equal(response.statusCode, 404);

            done();
        });
    });

    it('#adiciona() deve retornar um objeto', function (done) {
        request.headers = { };

        request.body = {
            nome    : 'Foo Bar',
            email   : 'foo@bar.bar',
            password: 'foo',
            uf      : 'AA',
            estado  : 'aaa aaa',
            cidade  : 'bbb bbb bb'
        };

        Usuario.adiciona(request, response, function() {
            assert.equal(response.content.object, 'error');

            done();
        });
    });

    it('#atualiza() deve retornar um objeto', function (done) {
        request.headers = { };

        request.params = {
            id: 1
        };

        request.query = {
            page : 1,
            limit: 1
        };

        Usuario.atualiza(request, response, function() {
            assert.equal(response.content.object, 'error');

            done();
        });
    });

    it('#apaga() deve retornar um objeto', function (done) {
        request.headers = { };

        request.params = {
            id: 1
        };

        request.query = {
            page : 1,
            limit: 1
        };

        Usuario.apaga(request, response, function() {
            assert.equal(response.content.object, 'error');

            done();
        });
    });
});