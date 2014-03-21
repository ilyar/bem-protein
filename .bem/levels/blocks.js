var PATH = require('path'),
    project = require('../../project.json'),
    environ = require('bem-environ')({ libDir: project.libDir }),
    join = PATH.join,

    BEM_TECHS = environ.getLibPath('bem-techs', '.bem/techs');

exports.getTechs = function() {

    return {
        'bemhtml'       : join(BEM_TECHS, 'bemhtml.js'),
        'js'            : 'v2/js-i',
        'sass'          : join(BEM_TECHS, 'sass'),
        'md'            : join(BEM_TECHS, 'md')
    };

};

exports.defaultTechs = ['sass', 'js', 'bemhtml', 'md'];
