var pkg     = require('../../package.json')._settings,
    environ = require('bem-environ'),
    join    = require('path').join,

    PRJ_ROOT    = environ.PRJ_ROOT,
    LIBS_PATH   = join(PRJ_ROOT, pkg.libs),
    TECHS_PATH  = join('.bem', 'techs'),
    BEM_TECHS   = join(LIBS_PATH, 'bem-techs', TECHS_PATH);

exports.getTechs = function() {

    return {
        'bemhtml' : join(BEM_TECHS, 'bemhtml.js'),
        'js'      : 'v2/js-i',
        'sass'    : join(BEM_TECHS, 'sass'),
        'md'      : join(BEM_TECHS, 'md')
    };

};

exports.defaultTechs = ['sass', 'js', 'bemhtml', 'md'];
