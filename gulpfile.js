var gulp = require('gulp'),
    rename = require("gulp-rename"),
    del = require('del'),
    sass = require('gulp-sass'),
    css = require('gulp-uglifycss'),
    js = require('gulp-uglify');


gulp.task('sass', ['clean'], function () {
    gulp.src('./src/scss/variables.scss')
        .pipe(gulp.dest('./dist/scss/'));
    gulp.src('./src/scss/menu-animate.scss')
        .pipe(gulp.dest('./dist/scss/'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css/'))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('css', ['clean', 'sass'], function () {
    return gulp.src('./src/css/*.css')
        .pipe(gulp.dest('./dist/css/'))
        .pipe(css())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('js', ['clean'], function () {
    return gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./dist/js/'))
        .pipe(js({output: {comments: /^!|@preserve|@license|@cc_on/i}}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/js/'));

});
gulp.task('clean', function () {
    return del(['dist']);
});

gulp.task('build', ['sass', 'css', 'js']);

gulp.task('default', ['build']);




