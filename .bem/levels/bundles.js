var PATH = require('path'),
    BEM = require('bem'),
    project = require('../../project.json'),
    environ = require('bem-environ')({ libDir: project.libDir }),
    join = PATH.join,

    PRJ_ROOT = environ.PRJ_ROOT,
    BLOCKS_PATH = join(environ.PRJ_ROOT, 'blocks'),
    BEMCORE_TECHS = environ.getLibPath('bem-core', '.bem/techs'),
    BEM_TECHS = environ.getLibPath('bem-techs', '.bem/techs');

exports.getTechs = function() {

    return {
        'bemjson.js'         : join(BEM_TECHS, 'bemjson.js'),
        'bemdecl.js'         : 'v2/bemdecl.js',
        'deps.js'            : 'v2/deps.js',
        'js'                 : 'v2/js-i.js',
        'sass'               : 'sass.js',
        'bemhtml'            : join(BEMCORE_TECHS, 'bemhtml.js'),
        'html'               : join(BEMCORE_TECHS, 'html.js')
    };

};

exports.defaultTechs = ['bemjson.js'];
