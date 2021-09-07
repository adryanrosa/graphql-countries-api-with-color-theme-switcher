const { series } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

function buildStyles() {
  return gulp.src('./sass/**/*.scss')
    .pipe(concat('main.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}

function watch() {
  return gulp.watch(['./sass/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watch);
