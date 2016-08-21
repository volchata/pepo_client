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
                    'static/*.min.js'
                ],
                directives: {
                    node: true,
                    todo: true
                },
                options: {
                    edition: 'latest',
                    junit: 'out/server-junit.xml',
                    log: 'out/server-lint.log',
                    jslintXml: 'out/server-jslint.xml',
                    errorsOnly: true,
                    failOnError: false,
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
                    "empty-rules": false,
                    "adjoining-classes": false,
                    "universal-selector": false,
                    "outline-none": false,
                    "box-sizing": false,
                    "unqualified-attributes": false,
                    "regex-selectors": false,
                    "known-properties": false,
                    "box-model": false
                }
            }
        }
    });

    grunt.registerTask('default', ['githooks']);
    grunt.registerTask('hookmeup', ['clean:hooks', 'shell:hooks']);
};
