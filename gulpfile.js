// TODO: Plans - jshint, csslint, imagemin, svgmin, uglify, csso

var pkg  = require('./package.json')._settings,
    bem  = require('bem'),
    gulp = require('gulp'),
    gif  = require('gulp-if'),
    sass = require('gulp-sass'),
    pref = require('gulp-autoprefixer'),
    path = require('path'),
    join = path.join;

var BUNDLE       = 'index',
    BUNDLES_PATH = join(pkg.root, pkg.bundles),
    BUNDLE_DIR   = join(BUNDLES_PATH, BUNDLE),
    BUNDLE_SASS  = join(BUNDLE_DIR, BUNDLE + '.scss');

gulp.task('sass', function () {
    return gulp.src(BUNDLE_SASS)
        .pipe(sass({
            sourceComments: 'map'
        }))
        .pipe(pref('last 2 version'))
        .pipe(gulp.dest(BUNDLE_DIR));
});

gulp.task('default', ['sass']);