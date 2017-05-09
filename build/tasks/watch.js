var gulp = require('gulp'),
    paths = require('../paths'),
    browserSync = require('browser-sync');

function reportChange(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', ['serve'], function () {
    gulp.watch(paths.js, ['build-js', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.sassVar, ['build-css', browserSync.reload]).on('change', reportChange);
    gulp.watch(paths.sassSrc, ['build-css', browserSync.reload]).on('change', reportChange);
});
