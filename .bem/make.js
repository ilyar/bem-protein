/* jshint node:true */
/* global MAKE */

var project = require('../project.json'),
    environ = require('bem-environ')({ libDir: project.libDir }),
    path = require('path'),
    join = path.join,
    blocksPath = join(environ.PRJ_ROOT, 'blocks');

environ.extendMake(MAKE);

process.env.YENV = project.env;

MAKE.decl('Arch', {

    bundlesLevelsRegexp: project.bundles

});

MAKE.decl('BundleNode', {

    getTechs: function() {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'bemhtml',
            'js',
            'sass',
            'html'
        ];

    },

    getForkedTechs : function() {
        return this.__base().concat(['js', 'sass']);
    },

    getLevels : function() {
        return [
            'bem-core/common.blocks'
        ]
        .map(function(level) { return path.resolve(environ.LIB_ROOT, level); })
        .concat([
            'base',
            'typo'
        ]
        .map(function(level) { return path.resolve(blocksPath, level); }));
    },

    'create-browser.js+bemhtml-optimizer-node': function(tech, sourceNode, bundleNode) {
        sourceNode.getFiles().forEach(function(f) {
            this['create-js-optimizer-node'](tech, this.ctx.arch.getNode(f), bundleNode);
        }, this);
    },

    'create-css-node' : function(tech, bundleNode, magicNode) {
        var source = this.getBundlePath('sass');
        if(this.ctx.arch.hasNode(source)) {
            return this.createAutoprefixerNode(tech, this.ctx.arch.getNode(source), bundleNode, magicNode);
        }
    }

});

// TODO: Fix this. See bem-components/.bem/make.js
//require('bem-tools-autoprefixer').extendMake(MAKE);
//MAKE.decl('AutoprefixerNode', {
//
//    getBrowsers : function() {
//
//        return [
//            'last 2 versions',
//            'ie 10',
//            'ff 24',
//            'opera 12.16'
//        ];
//
//    }
//
//});