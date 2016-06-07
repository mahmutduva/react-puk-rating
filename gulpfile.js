'use strict';

var gulp = require('gulp'),
    server = require('gulp-webserver'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    open = require('gulp-open');


gulp.task('build', function () {
    return browserify({entries: './example/app.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch(['./src/*.jsx', './example/*.jsx'], ['build']);
});

gulp.task('open', function () {
    gulp.src('.')
        .pipe(server({port: 3000}))
        .pipe(open({uri: 'http://localhost:3000'}));

});

gulp.task('default', ['watch','open']);