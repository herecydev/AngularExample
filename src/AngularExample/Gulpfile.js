/// <binding ProjectOpened='default' />
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var del = require('del');

gulp.task('compress', function () {
	return gulp.src([
		'bower_components/angular/angular.min.js',
		'bower_components/angular-resource/angular-resource.min.js',
		'bower_components/angular-route/angular-route.min.js',
		'Scripts/**/*.js'])
		.pipe(uglify())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('wwwroot'));
});

gulp.task('moveIndex', function () {
	return gulp.src('index.html')
	.pipe(gulp.dest('wwwroot'));
});

gulp.task('moveViews', function () {
	return gulp.src('Views/**/*')
	.pipe(gulp.dest('wwwroot/Views'));
});

gulp.task('clean', function () {
	del(['wwwroot/**/*']);
})

gulp.task('cleanAndCompress', function () {
	runSequence('clean', 'compress', 'moveIndex', 'moveViews');
})

gulp.task('watch', function () {
	gulp.watch('Scripts/**/*.js', ['cleanAndCompress']);
});

gulp.task('default', ['watch']);