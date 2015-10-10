/**
 * Test Bootstrap
 *
 * Overwrite connection settings and change default database to 'test' database
 *
 * @author  Thiago Paes <mrprompt@gmail.com>
 * @license MIT
 */
'use strict';

process.env.OPENSHIFT_APP_NAME              = 'test';
process.env.OPENSHIFT_MONGODB_DB_USERNAME   = '';
process.env.OPENSHIFT_MONGODB_DB_PASSWORD   = '';
process.env.OPENSHIFT_MONGODB_DB_HOST       = 'localhost';
process.env.OPENSHIFT_MONGODB_DB_PORT       = '27017';

var connection = require('../src/modules/connection');

before(function() {
    connection.mongoose.connection.useDb('test');
});
