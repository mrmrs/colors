// Load plugins

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    prefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    myth = require('gulp-myth'),
    stylus = require('gulp-stylus'),
    rename = require('gulp-rename'),
    size = require('gulp-size'),
    csslint = require('gulp-csslint')
    browserSync = require('browser-sync'),
    browserReload = browserSync.reload;


// Use csslint without box-sizing or compatible vendor prefixes (these
// don't seem to be kept up to date on what to yell about)

gulp.task('lint', function(){
  gulp.src('./css/*.css')
    .pipe(csslint({
          'compatible-vendor-prefixes': false,
          'box-sizing': false
        }))
    .pipe(csslint.reporter());

});

// Task that compiles scss files down to good old css
gulp.task('sass', function(){
  gulp.src('./sass/colors.scss')
      .pipe(watch(function(files) {
        return files.pipe(sass())
          .pipe(prefix())
          .pipe(size({gzip: true, showFiles: true, title:'unminified colors.css'}))
          .pipe(gulp.dest('css'))
          .pipe(browserSync.reload({stream:true}));
      }));
});

// Task to minify colors.css then rename as colors.min.css

gulp.task('minify', function(){
  gulp.src('./css/colors.css')
    .pipe(size({gzip: true, showFiles: true, title:'minified colors.css'}))
    .pipe(minifyCSS())
    .pipe(size({gzip: true, showFiles: true, title:'minified colors.css'}))
    .pipe(rename('colors.min.css'))
    .pipe(gulp.dest('./css/'));
});

// Task that compiles css using the myth processor

gulp.task('myth', function(){
  gulp.src('./myth/*.css')
    .pipe(watch(function(files) {
      return files.pipe(myth())
      .pipe(prefix())
      .pipe(gulp.dest('./css/'));
    }));
});


// Just runs autoprefixer on the compiled css

gulp.task('prefix', function(){
  gulp.src('./css/*.css')
      .pipe(prefix())
      .pipe(gulp.dest('./css/'));
});

gulp.task('stylus', function(){
  gulp.src('./stylus/colors.styl')
      .pipe(watch(function(files) {
        return files.pipe(stylus())
        .pipe(prefix())
        .pipe(gulp.dest('./css/'));
      }));
});

// Initialize browser-sync which starts a static server also allows for
// browsers to reload on filesave
gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

/*
   DEFAULT TASK

 • Process sass and lints outputted css
 • Outputted css is run through autoprefixer
 • Runs jshint on all js files in ./js/
 • Sends updates to any files in directory to browser for
 automatic reloading

*/

gulp.task('default', function(){
    gulp.watch(['./sass/colors.scss'], function(event) {
      gulp.run('sass', 'lint');
    });
});

