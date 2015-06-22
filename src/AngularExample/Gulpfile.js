/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var uglifier = require('gulp-uglify');

gulp.task('compress', function () {
    return gulp.src('Scripts/**/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('wwwroot/app.js'));
});