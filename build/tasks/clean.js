var gulp = require('gulp'),
    paths = require('../paths'),
    del = require('del');

gulp.task('clean-js', function () {
    return del([paths.output]);
});

gulp.task('clean-scss', ['clean-css'], function () {
    return del([paths.outputScss]);
});

gulp.task('clean-css', function () {
    return del([paths.outputCss, paths.outputSrcCss]);
});

