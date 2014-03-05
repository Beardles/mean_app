var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/multivision',
        port: process.env.PORT || 3030,
        rootPath: rootPath
    },
    production: {
        db: 'mongodb://beardles:beardles@ds033419.mongolab.com:33419/multivisions',
        port: process.env.PORT || 80,
        rootPath: rootPath
    }
};