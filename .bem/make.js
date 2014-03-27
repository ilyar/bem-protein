var pkg     = require('../package.json')._settings,
    environ = require('bem-environ')({ libDir: pkg.libs }),
    path    = require('path'),
    join    = path.join,

    PRJ_ROOT     = environ.PRJ_ROOT,
    LIBS_PATH    = join(PRJ_ROOT, pkg.libs),
    BLOCKS_PATH  = join(PRJ_ROOT, pkg.root, pkg.blocks),
    BUNDLES_PATH = join(pkg.root, pkg.bundles);

environ.extendMake(MAKE);

MAKE.decl('Arch', {

    getBundlesLevels: function() {
        return [
            BUNDLES_PATH
        ];
    }

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
        .map(function(level) { return path.resolve(LIBS_PATH, level); })
        .concat([
            'base',
            'typo',
            'grid',
            'buttons',
            'forms',
            'navigation',
            'lists',
            'tables',
            'wrappers',
            'windows',
            'progress',
            'js'
        ]
        .map(function(level) { return path.resolve(BLOCKS_PATH, level); }));
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