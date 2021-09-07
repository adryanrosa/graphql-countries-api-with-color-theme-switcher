const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

function scssTask() {
  return src('sass/main.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('css', { sourcemaps: '.' }));
}

function watchTask() {
  return watch(['sass/main.scss'], scssTask);
}

exports.default = series(scssTask, watchTask);
