var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('serve', ['build'], function (done) {
    browserSync({
        online: false,
        open: false,
        port: 3000,
        server: {
            baseDir: ['.'],
            middleware: function (req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                next();
            }
        }
    }, done);
});
