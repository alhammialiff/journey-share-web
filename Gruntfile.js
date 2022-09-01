'use strict';

const sass = require('node-sass');

module.exports = function (grunt) {

    require('@lodder/time-grunt')(grunt);

    require('jit-grunt')(grunt, {

        useminPrepare: 'grunt-usemin'
    });

    grunt.initConfig({

        sass: {

            dist: {
                options: {
                    implementation: sass
                },
                files: {
                    'css/styles.css': 'css/styles.scss'
                }
            }
        },

        watch: {

            css: {
                files: './css/styles.scss',
                tasks: ['sass']
            }

        },

        browserSync: {
            dev: {

                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },

                options: {
                    watchTask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        },

        copy: {

            html: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: 'dist'
                }]
            },

            fonts: {

                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'node_modules/font-awesome',
                    src: ['fonts/*.*'],
                    dest: 'dist'
                }]

            }
        },

        clean: {

            build: {
                src: ['dist/']
            }

        },

        imagemin: {

            dynamic: {

                files: [{
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['img/*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]

            }

        },

        useminPrepare: {

            foo: {
                dest: 'dist',
                // To edit here after webpage is beefed up
                src: ['index.html','home.html']
            },
            options: {

                flow: {
                    steps: {
                        css: ['cssmin'],
                        js: ['uglify']
                    },
                    post: {
                        css: [{
                            name: 'cssmin',
                            createConfig: function (context, block) {
                                var generated = context.options.generated;
                                generated.options = {
                                    keepSpecialComments: 0,
                                    rebase: false
                                }
                            }
                        }]
                    }
                }
            }

        },

        concat: {
            options: {
                separator: ';',
                dist: {}
            }
        },

        uglify: {
            dist: {}
        },

        cssmin: {
            dist: {}
        },

        filerev: {

            option: {
                encoding: 'utf-8',
                algorithm: 'md-5',
                length: 20
            },

            release: {
                files: [{
                    src: [
                        'dist/js/*.js',
                        'dist/css/*.css'
                    ]
                }]
            }
        },

        usemin: {
            // To edit when webpage is beefed up
            html: ['dist/index.html', 'dist/home.html'],
            options: {
                assetsDirs: ['dist','dist/css','dist/js']
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true
                },

                // To edit when webpage is beefed up
                files: {
                    'dist/index.html': 'dist/index.html',
                    'dist/home.html': 'dist/home.html',
                }
            }
        }

    });

    grunt.registerTask('css',['sass']);
    grunt.registerTask('default',['browserSync','watch']);
    grunt.registerTask('build',[

        'clean',
        'copy',
        'imagemin',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin'

    ]);



}