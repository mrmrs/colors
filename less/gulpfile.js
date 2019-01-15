const { src, dest, parallel } = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

function mincss() {
  return src('*.less')
    .pipe(less())
    .pipe(cleanCSS()).pipe(rename({
      extname: ".min.css"
    }))
    .pipe(dest('.'))
}

function css() {
  return src('*.less')
    .pipe(less())
    .pipe(dest('.'))
}

exports.css = css;
exports.mincss = mincss;
exports.default = parallel(mincss, css);
