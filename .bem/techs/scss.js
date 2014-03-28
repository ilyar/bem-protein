'use strict';

var template = require('bem/lib/template'),
    sass = require('node-sass');

exports.baseTechPath = 'bem/lib/techs/v2/css';

exports.API_VER = 2;

exports.techMixin = {

    getCreateSuffixes: function() {
        return ['scss'];
    },

    getCreateResult : function(path, suffix, vars) {

        if (vars.opts && vars.opts.content) return vars.opts.content;

        vars.Selector = '.' + vars.BlockName +
            (vars.ElemName? '__' + vars.ElemName : '') +
            (vars.ModName? ('_' + vars.ModName + (vars.ModVal? '_' + vars.ModVal: '')): '');

        return template.process([
            '{{bemSelector}} {',
            '    ',
            '}'
        ], vars);
    },

    getBuildResultChunk: function(relPath, path, suffix) {
        return '@import "' + relPath + '";\n';
    }

}