// Load plugins

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    lr    = require('tiny-lr'),
    server = lr(),
    livereload = require('gulp-livereload'),
    prefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    myth = require('gulp-myth'),
    stylus = require('gulp-stylus'),
    csslint = require('gulp-csslint');


// Task to minify all css files in the css directory

gulp.task('minify', function(){
  gulp.src('./css/*.css')
    .pipe(minifyCSS({keepSpecialComments: 0}))
    .pipe(gulp.dest('./css/'));
});


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
  gulp.src('./sass/*.scss')
      .pipe(watch(function(files) {
        return files.pipe(sass({includePaths: ['./sass/']}))
          .pipe(prefix())
          .pipe(gulp.dest('./css/'))
          .pipe(livereload(server));
      }));
});

// Task that compiles css using the myth processor

gulp.task('myth', function(){
  gulp.src('./myth/*.css')
      .pipe(myth())
      .pipe(gulp.dest('./css/'));
});

gulp.task('stylus', function(){
  gulp.src('./stylus/colors.styl')
      .pipe(watch(function(files) {
        return files.pipe(stylus())
        .pipe(prefix())
        .pipe(gulp.dest('./css/'))
        .pipe(livereload(server));
      }));
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
  server.listen(35729, function (err) {
    gulp.watch(['./sass/*.scss', './js/*.js'], function(event) {
      gulp.run('sass', 'lint');
    });
  });
});

