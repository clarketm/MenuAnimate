var gulp = require('gulp');

var rename = require("gulp-rename");
var filter = require("gulp-filter");

var sass = require('gulp-sass');
var css = require('gulp-uglifycss');
var js = require('gulp-uglify');


gulp.task('sass', function() {
    const f = filter(['**/*', '!./src/scss/**/variables.scss']);

    return gulp.src('./src/scss/**/*.scss')
        .pipe(gulp.dest('./dist/scss/'))
        .pipe(sass().on('error', sass.logError))
        .pipe(f)
        .pipe(gulp.dest('./src/css/'))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('css', function() {
    return gulp.src('./src/css/*.css')
        .pipe(gulp.dest('./dist/css/'))
        .pipe(css())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css/'));
});


gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./dist/js/'))
        .pipe(js({output: {comments: /^!|@preserve|@license|@cc_on/i}}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/js/'));

});

gulp.task('default', ['sass', 'css', 'js']);




