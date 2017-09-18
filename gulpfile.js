var gulp = require('gulp');

var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');

gulp.task('sass', function() {
	return gulp.src('styles/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest(''))
})

gulp.task('minify', function(){
	return gulp.src('dist/*.css')
		.pipe(cssnano())
		.pipe(gulp.dest('extension'))
})

gulp.task('copy', function(){
	gulp.src('img/*')
		.pipe(gulp.dest('extension/img'));
	gulp.src('manifest.json')
		.pipe(gulp.dest('extension'));
})

gulp.task('build', ['sass', 'minify', 'copy']);

gulp.watch('styles/**/*.scss', ['sass']);