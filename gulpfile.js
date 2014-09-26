// Load plugins

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    browserReload = browserSync.reload;


// Use csslint without box-sizing or compatible vendor prefixes (these
// don't seem to be kept up to date on what to yell about)

gulp.task('lint', function(){
  gulp.src('./css/*.css')
    .pipe(plugins.csslint({
          'compatible-vendor-prefixes': false,
          'box-sizing': false
        }))
    .pipe(plugins.csslint.reporter());

});

// Task that compiles scss files down to good old css
gulp.task('sass', function(){
  gulp.src('./sass/colors.scss')
      .pipe(plugins.watch(function(files) {
        return files.pipe(plugins.sass())
          .pipe(plugins.autoprefixer())
          .pipe(plugins.size({gzip: true, showFiles: true, title:'unminified colors.css'}))
          .pipe(gulp.dest('css'))
          .pipe(browserSync.reload({stream:true}));
      }));
});

// Task to minify colors.css then rename as colors.min.css

gulp.task('minify', function(){
  gulp.src('./css/colors.css')
    .pipe(plugins.minifyCss())
    .pipe(plugins.size({gzip: true, showFiles: true, title:'minified colors.css'}))
    .pipe(plugins.rename('colors.min.css'))
    .pipe(gulp.dest('./css/'));
});

// Task that compiles css using the myth processor

gulp.task('myth', function(){
  gulp.src('./myth/*.css')
    .pipe(plugins.watch(function(files) {
      return files.pipe(plugins.myth())
      .pipe(plugins.autoprefixer())
      .pipe(gulp.dest('./css/'));
    }));
});


// Just runs autoprefixer on the compiled css

gulp.task('prefix', function(){
  gulp.src('./css/*.css')
      .pipe(plugins.autoprefixer())
      .pipe(gulp.dest('./css/'));
});

gulp.task('stylus', function(){
  gulp.src('./stylus/colors.styl')
      .pipe(plugins.watch(function(files) {
        return files.pipe(plugins.stylus())
        .pipe(plugins.autoprefixer())
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

