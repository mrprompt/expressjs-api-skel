/**
 * Token Model
 *
 * @author  Thiago Paes <mrprompt@gmail.com>
 * @license MIT
 */
'use strict';

var mongoose    = require('mongoose');
var TokenSchema = new mongoose.Schema({
    conteudo: {
        type: String,
        default: ''
    },
    tipo: {
        type: String,
        enum: ['rw', 'ro']
    },
    cadastro: {
        type: Date,
        default: Date.now
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }
})
    .plugin(require('mongoose-paginate'));

module.exports = mongoose.model('Token', TokenSchema);
