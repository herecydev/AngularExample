/// <binding ProjectOpened='default' />
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var del = require('del');
var scripts = 'Scripts/**/*.js';

gulp.task('compress', function () {
	return gulp.src(scripts)
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('wwwroot'));
});

gulp.task('clean', function () {
	del(['wwwroot/**.*']);
})

gulp.task('cleanAndCompress', function () {
    runSequence('clean', 'compress');
})

gulp.task('watch', function () {
    gulp.watch(scripts, ['cleanAndCompress']);
});

gulp.task('default', ['watch']);