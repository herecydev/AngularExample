/// <binding ProjectOpened='default, watch' />
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
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

gulp.task('watch', function () {
	gulp.watch(scripts, ['compress', 'clean']);
});

gulp.task('default', ['compress', 'clean']);