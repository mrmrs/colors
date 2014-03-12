// Load plugins

var gulp = require('gulp'),
	gutil = require('gulp-util'),
	path = require('path'),
	watch = require('gulp-watch'),
	lr = require('tiny-lr'),
	server = lr(),
	livereload = require('gulp-livereload'),
	prefix = require('gulp-autoprefixer'),
	minifyCSS = require('gulp-minify-css'),
	sass = require('gulp-sass'),
	myth = require('gulp-myth'),
	stylus = require('gulp-stylus'),
	csslint = require('gulp-csslint'),
	rename = require('gulp-rename'),
	less = require('gulp-less'),
	coffee = require('gulp-coffee');

// CoffeeScript

gulp.task('coffee', function () {
	gulp.src('./coffee/*.coffee')
		.pipe(coffee({
			bare: true
		})).on('error', gutil.log)
		.pipe(gulp.dest('./coffee'));
});

// CSS

// Use csslint without box-sizing or compatible vendor prefixes (these
// don't seem to be kept up to date on what to yell about)

gulp.task('lint', function () {
	gulp.src('./css/*.css')
		.pipe(csslint({
			'compatible-vendor-prefixes': false,
			'box-sizing': false
		}))
		.pipe(csslint.reporter());
});

gulp.task('prefix', function () {
	gulp.src('./css/*.css')
		.pipe(prefix())
		.pipe(gulp.dest('./css/'));
});

gulp.task('minify', function () {
	gulp.src('./css/*.css')
		.pipe(minifyCSS({
			keepSpecialComments: 0
		}))
		.pipe(gulp.dest('./css/'))
		.pipe(rename('colors.min.css'))
		.pipe(gulp.dest('./css/'));
});

// One task to run them all
gulp.task('css', ['lint', 'prefix', 'minify']);

// JavaScript


// Anything to do here?


// LESS

gulp.task('compile-less', function () {
	return gulp.src('./less/colors.less')
		.pipe(less())
		.pipe(rename('colors.min.css'))
		.pipe(gulp.dest('./less/'));
});

// Myth

gulp.task('compile-myth', function () {
	gulp.src('./myth/*.css')
		.pipe(myth())
		.pipe(prefix())
		.pipe(gulp.dest('./css/'));
});

// SASS

gulp.task('compile-sass', function () {
	gulp.src('./sass/*.scss')
		.pipe(watch(function (files) {
			return files.pipe(sass({
				includePaths: ['./sass/']
			}))
				.pipe(prefix())
				.pipe(gulp.dest('./css/'))
				.pipe(livereload(server));
		}));
});

// Stylus

gulp.task('compile-stylus', function () {
	gulp.src('./stylus/colors.styl')
		.pipe(watch(function (files) {
			return files.pipe(stylus())
				.pipe(prefix())
				.pipe(gulp.dest('./css/'))
				.pipe(livereload(server));
		}));
});

/**
 * DEFAULT TASK
 * Process SASS and lint processed CSS
 * processed CSS gets autoprefixed
 * Run JSHint on all JS files
 * LiveReload server autoreloads browser
 */

gulp.task('default', function () {
	server.listen(35729, function (err) {
		gulp.watch(['./sass/*.scss'], function (event) {
			gulp.run('sass', 'lint');
		});
	});
});
