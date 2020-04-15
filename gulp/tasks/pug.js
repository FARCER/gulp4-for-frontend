const gulp = require('gulp');
const htmlValidator = require('gulp-w3c-html-validator');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');

// Преобразуем Pug в HTML

module.exports = function pug2html() {
  return gulp.src('dev/pug/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(plumber.stop())
    .pipe(gulpif(argv.prod, htmlValidator()))
    .pipe(gulp.dest('dist'))
};
