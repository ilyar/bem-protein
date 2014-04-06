// Task for build distribution package

// TODO: Plans - jshint, csslint, imagemin, svgmin

var pkg  = require('./package.json')._settings,
    bem  = require('bem'),
    gulp = require('gulp'),
    gif  = require('gulp-if'),
    path = require('path'),
    join = path.join,

    BUNDLE       = 'index',
    BUNDLES_PATH = join(pkg.root, pkg.bundles),
    BUNDLE_DIR   = join(BUNDLES_PATH, BUNDLE),
    BUNDLE_CSS   = join(BUNDLE_DIR, '_' + BUNDLE + '.prefix.css'),
    COMPONENTS   = [
                     'base', 'typo', 'grid', 'buttons', 'forms', 'navigation', 'lists',
                     'tables', 'wrappers', 'windows', 'progress', 'js'
                   ];

gulp.task('default', []);