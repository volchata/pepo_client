module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-githooks');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-jslint');


    grunt.initConfig({
        githooks: {
            all: {
                'pre-commit': 'jslint csslint'
            }
        },

        jslint: {
            client: {
                src: [
                    '*/*.js',
                    '*.blocks/**/*.js'
                ],
                exclude: [
                    'server/*.js',
                    'static/*.js',
                    'static/*.min.js',
                    '*.blocks/**/*.deps.js',
                    '*.blocks/**/*.bemtree.js'
                ],
                directives: {
                    node: true,
                    todo: true,
                    sloppy: true,
                    unparam: true,
                    nomen: true,
                    plusplus: true,
                    predef: [
                        'block',
                        'content',
                        'mod',
                        'tag',
                        'js',
                        'applyNext',
                        'modules',
                        'BEMHTML',
                        'document',
                        'alert',
                        'error',
                        'Dropzone'
                    ]
                },
                options: {
                    edition: 'latest',
                    junit: 'out/server-junit.xml',
                    log: 'out/server-lint.log',
                    jslintXml: 'out/server-jslint.xml',
                    errorsOnly: true,
                    checkstyle: 'out/server-checkstyle.xml'
                }
            }
        },

        csslint: {
            base_theme: {
                src: [
                    '*.blocks/**/*.css',
                    '*.blocks/***/**/*.css'
                ],
                rules: {
                    "import": false,
                    "overqualified-elements": 2,
                    "adjoining-classes": false,
                    "outline-none": false,
                    // "known-properties": false,
                    "box-model": false,
                    "box-sizing": false
                }
            }
        }
    });

    grunt.registerTask('default', ['githooks']);
    grunt.registerTask('hookmeup', ['clean:hooks', 'shell:hooks']);
};
