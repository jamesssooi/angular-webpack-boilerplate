// dependency imports
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var replace = require('gulp-html-replace');
var webpack = require('webpack-stream');
var runSequence = require('run-sequence');
var del = require('del');

// Watch files for changes
var watch = function() {
	gulp.watch('src/css/scss/**/*.scss', ['sass']);
	gulp.watch('src/app/**/*.js', ['webpack']);
};

// Default gulp action
gulp.task('default', watch());

// Process SCSS files
gulp.task('sass', function() {
	return gulp.src('src/css/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/css'));
});

// Process JS files with webpack
gulp.task('webpack', function() {
	return gulp.src('src/app/index.js')
		.pipe(webpack({
			output: {
				filename: 'bundle.js'
			}
		}))
		.pipe(gulp.dest('src/js'))
});

// Function to replace js file reference in index.html
function replaceJS(name) {
	return gulp.src('dist/index.html')
		.pipe(replace({
			js: name + '.js'
		}))
		.pipe(gulp.dest('dist'))
}

/*
 *
 *	BUILD SYSTEM
 *
 */

// Build SCSS files
gulp.task('sass-build', function() {
	return gulp.src('src/css/scss/**/*.scss')
		.pipe(sass())
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/css'))
		
});

// Build JS files with webpack
gulp.task('webpack-build', function() {
	return gulp.src('src/app/index.js')
		.pipe(webpack({}, null, function(err, stats) {
			replaceJS(stats.hash)
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
});

// Transfer html files
gulp.task('html-transfer', function() {
	return gulp.src('src/**/*.+(html|htm|php)')
		.pipe(gulp.dest('dist'))
});

// Transfer assets
gulp.task('assets-transfer', function() {
	return gulp.src('src/assets/**/*.+(png|gif|jpg|svg|eot|ttf|otf)')
		.pipe(gulp.dest('dist/assets'))
});

// Clean dist folder
gulp.task('clean', function() {
	del('dist');
});

// Build project
gulp.task('build', function(callback) {
	return runSequence('clean', 'html-transfer', [
		'sass-build', 
		'webpack-build', 
		'assets-transfer'
	], callback)
});