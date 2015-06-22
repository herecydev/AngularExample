var gulp = require('gulp');
var uglify = require('gulp-uglify');
var scripts = 'Scripts/**/*.js';

gulp.task('compress', function () {
    return gulp.src(scripts)
      .pipe(uglify())
      .pipe(gulp.dest('wwwroot'));
});

gulp.task('watch', function () {
    gulp.watch(scripts, ['compress']);
});

gulp.task('default', ['compress']);