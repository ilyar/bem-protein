var PATH = require('path'),
    project = require('../../project.json'),
    environ = require('bem-environ')({ libDir: project.libDir }),
    join = PATH.join,

    BEMLIB_TECHS = environ.getLibPath('bem-techs', '.bem/techs');

exports.getTechs = function() {

    return {
        'bemhtml'       : join(BEMLIB_TECHS, 'bemhtml.js'),
        'js'            : 'v2/js-i',
        'sass'          : join(BEMLIB_TECHS, 'less'),
        'md'            : join(BEMLIB_TECHS, 'md')
    };

};

exports.defaultTechs = ['sass', 'js', 'bemhtml', 'md'];
