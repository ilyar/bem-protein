var pkg     = require('../../package.json')._settings,
    environ = require('bem-environ'),
    join    = require('path').join,

    PRJ_ROOT    = environ.PRJ_ROOT,
    LIBS_PATH   = join(PRJ_ROOT, pkg.libs),
    TECHS_PATH  = join('.bem', 'techs'),
    PRJ_TECHS   = join(PRJ_ROOT, TECHS_PATH),
    BEM_TECHS   = join(LIBS_PATH, 'bem-techs', TECHS_PATH);

exports.getTechs = function() {

    return {
        'bemhtml' : join(BEM_TECHS, 'bemhtml.js'),
        'js'      : 'v2/js-i',
        'deps.js' : 'v2/deps.js',
        'scss'    : join(PRJ_TECHS, 'scss'),
        'md'      : join(BEM_TECHS, 'md')
    };

};

exports.defaultTechs = ['scss', 'js', 'bemhtml', 'md'];
