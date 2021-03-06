const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('dart-sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

function scssTask() {
  return src('src/sass/main.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('src/css', { sourcemaps: '.' }));
}

function watchTask() {
  return watch(['**/*.scss'], scssTask);
}

exports.default = series(scssTask, watchTask);
