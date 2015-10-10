/**
 * Usuario Model
 *
 * @author  Thiago Paes <mrprompt@gmail.com>
 * @license MIT
 */
'use strict';

var mongoose        = require('mongoose');
var UsuarioSchema   = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        index: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        bcrypt: true
    },
    cadastro: {
        type: Date,
        default: Date.now
    },
    localidade: {
        cidade: {
            type: String
        },
        estado: {
            type: String
        },
        uf: {
            type: String
        }
    }
})
    .plugin(require('mongoose-paginate'))
    .plugin(require('mongoose-unique-validator'))
    .set('toJSON', {
        transform: function(doc, ret, options) {
            delete ret.password;

            return ret;
        }
    });

module.exports = mongoose.model('Usuario', UsuarioSchema);
