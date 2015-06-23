/// <binding ProjectOpened='default' />
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var del = require('del');

gulp.task('compress', function () {
	return gulp.src('Scripts/**/*.js')
		.pipe(uglify())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('wwwroot'));
});

gulp.task('copy', function () {
	var bower = {
		'angular': 'angular/angular.min.js',
		'angular/resource': 'angular-resource/angular-resource.min.js',
		'angular/route': 'angular-route/angular-route.min.js',
		'bootstrap/css': 'bootstrap/dist/css/*.min.css',
		'bootstrap/fonts': 'bootstrap/dist/fonts/*.*',
		'bootstrap/js': 'bootstrap/dist/js/*.min.js',
		'jquery': 'jquery/dist/jquery.min.js'
	};

	for (var destinationDir in bower) {
		gulp.src('bower_components/' + bower[destinationDir])
		.pipe(gulp.dest('wwwroot/' + destinationDir + '/'));
	};
});

gulp.task('copyIndex', function () {
	return gulp.src('index.html')
	.pipe(gulp.dest('wwwroot'));
});

gulp.task('copyCss', function () {
	return gulp.src('bower_components/bootstrap/dist/css/*.min.css')
	.pipe(gulp.dest('wwwroot/css'));
});

gulp.task('copyViews', function () {
	return gulp.src('Views/**/*')
	.pipe(gulp.dest('wwwroot/Views'));
});

gulp.task('clean', function () {
	del(['wwwroot/**/*']);
});

gulp.task('allOfTheThings', function () {
	runSequence('clean', ['copy', 'compress', 'copyIndex', 'copyViews', 'copyCss']);
})

gulp.task('watch', function () {
	gulp.watch('Scripts/**/*.js', ['allOfTheThings']);
});

gulp.task('default', ['watch']);