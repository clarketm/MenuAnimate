var gulp = require('gulp'),
    changed = require('gulp-changed'),
    paths = require('../paths'),
    rename = require("gulp-rename"),
    del = require('del'),
    sass = require('gulp-sass'),
    less = require('gulp-less'),
    css = require('gulp-uglifycss'),
    js = require('gulp-uglify');


gulp.task('build-js', ['clean-js'], function () {
    return gulp.src(paths.js)
        .pipe(changed(paths.outputJs, {extension: '.js'}))
        .pipe(gulp.dest(paths.outputJs))
        .pipe(js({output: {comments: /^!|@preserve|@license|@cc_on/i}}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.outputJs));
});

gulp.task('build-scss', ['clean-scss'], function () {
    gulp.src(paths.sassVar)
        .pipe(changed(paths.outputScss, {extension: '.scss'}))
        .pipe(gulp.dest(paths.outputScss));
    return gulp.src(paths.sassSrc)
        .pipe(changed(paths.outputScss, {extension: '.scss'}))
        .pipe(gulp.dest(paths.outputScss))
        .pipe(sass())
        .pipe(gulp.dest(paths.outputSrcCss))
});

gulp.task('build-less', ['clean-less'], function () {
    gulp.src(paths.lessVar)
        .pipe(changed(paths.outputLess, {extension: '.less'}))
        .pipe(gulp.dest(paths.outputLess));
    return gulp.src(paths.lessSrc)
        .pipe(changed(paths.outputLess, {extension: '.less'}))
        .pipe(gulp.dest(paths.outputLess))
});

gulp.task('build-css', ['build-scss', 'build-less'], function () {
    return gulp.src(paths.css)
        .pipe(changed(paths.outputCss, {extension: '.css'}))
        .pipe(gulp.dest(paths.outputCss))
        .pipe(css())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.outputCss));
});

gulp.task('build', ['build-js', 'build-css']);

gulp.task('default', ['build']);