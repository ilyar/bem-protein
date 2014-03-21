/* jshint node:true */
/* global MAKE */

var project = require('../project.json'),
    environ = require('bem-environ')({ libDir: project.libDir });

environ.extendMake(MAKE);

// Use 'production' for minimize and uglify files with borschik
process.env.YENV = project.env;

MAKE.decl('Arch', {

    bundlesLevelsRegexp: project.bundles,

    libraries: [
        'bem-core @ v2.0.0',
        'bem-techs @ 9cba685b72459161dcdc8ec75d614e8f88b5811e'
    ]

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

    'create-browser.js+bemhtml-optimizer-node': function(tech, sourceNode, bundleNode) {
        sourceNode.getFiles().forEach(function(f) {
            this['create-js-optimizer-node'](tech, this.ctx.arch.getNode(f), bundleNode);
        }, this);
    }

});