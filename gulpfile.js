// Load plugins

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch'),
    lr    = require('tiny-lr'),
    server = lr(),
    livereload = require('gulp-livereload'),
    prefix = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    lint = require('gulp-csslint'),
    sass = require('gulp-sass');



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

gulp.task('default', function(){
  gulp.watch(['*.html', './sass/*.scss'], function(event) {
    gulp.run('sass');
  });
});
