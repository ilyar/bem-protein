"use strict";

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require("load-grunt-tasks")(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require("time-grunt")(grunt);

    // Project configuration object
    var project = grunt.file.readJSON("project.json") || grunt.fatal("project.json not found");

    // Settings for files watcher
    var build_techs = [ "bemhtml", "sass", "js" ],
        // Paths for watch
        watch_paths = function() {
            return build_techs.map(function(tech) {
               return "blocks/**/{,*/}*." + tech;
            }).concat("bundles/**/*.bemjson.js");
        };

    // Tasks configuration
    var tasks = {

        project: project,
        bundles: project.bundles,
        current: "index",

        watch: {
            blocks: {
                files: watch_paths(),
                tasks: [ "default" ]
            },
            gruntfile: {
                files: [ "Gruntfile.js" ]
            }
        },

        bem: {
            // build bundles
            build: {
                verbosity: "error",
                command: "make"
            },
            // clean .bem/cache
            clean: {
                command: "make",
                method: "clean"
            }
        },

        sass: {
            build: {
                options: {
                    style: 'expanded',
                    sourcemap: true
                },
                files: {
                    "<%= bundles %>/<%= current %>/_<%= current %>.css":
                    "<%= bundles %>/<%= current %>/<%= current %>.sass"
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            update: {
                src: "<%= bundles %>/<%= current %>/_<%= current %>.css",
                dest: "<%= bundles %>/<%= current %>/_<%= current %>.css"
            }
        },

        csscomb: {
            reorder: {
                options: {
                    config: '.csscomb.json'
                },
                files: {
                    "<%= bundles %>/<%= current %>/_<%= current %>.css":
                    "<%= bundles %>/<%= current %>/_<%= current %>.css"
                }
            }
        }
    }

    grunt.initConfig(tasks);

    grunt.registerTask("supervisor", function(){

        grunt.task.run([
            "watch"
        ]);

    });

    grunt.registerTask("default", [
        "bem:build",
        "sass:build"
    ]);

    grunt.registerTask("dist", [
        "bem:clean",
        "default",
        "autoprefixer",
        "csscomb"
    ]);
};

