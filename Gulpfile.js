var gulp = require('gulp');
var phpspec = require('gulp-phpspec');
var notify = require('gulp-notify');
var shell = require('gulp-shell')

gulp.task('test', function() {
    	gulp.src('spec/**/*.php')
    	    .pipe(shell(['clear']))
	    .pipe(phpspec('', { 'verbose': 'v', notify: true }))
            .on('error', notify.onError({
            title: "Crap",
            message: "Your tests failed!",
            icon: __dirname + '/dev/fail.png'
        }))
        .pipe(notify({
            title: "Success",
            message: "All tests have returned green!",
            icon: __dirname + '/dev/check.png'
        }));
});

gulp.task('watch', function() {
    gulp.watch(['spec/**/*.php', 'src/**/*.php'], ['test']);
});

gulp.task('default', ['test', 'watch']);