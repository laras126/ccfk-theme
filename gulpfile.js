
'use strict';

var gulp = require('gulp'),
    // browserify = require('browserify'),
    babel = require('gulp-babel'),
    addsrc = require('gulp-add-src'),
    sourcemaps = require('gulp-sourcemaps'),
    // source = require('vinyl-source-stream'),
    // buffer = require('vinyl-buffer'),
    // path = require('path'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    autoprefix = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create();

// Put JS files into array
var babelFileList = [
  './assets/js/src/main.js',
];

// var entryPoint = './assets/js/src/main.js';

gulp.task('sass', function() {
  return gulp.src('assets/scss/main.scss')
    .pipe(sass({
      errLogToConsole: false,
      onError: function(err) {
        return notify().write(err);
      }
    }))
    // TODO enable
    .pipe(autoprefix({
        browsers: 'last 5 versions'
    }))
    .pipe(gulp.dest('./assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('./assets/css'));
});

// https://gist.github.com/dverbovyi/7f71879bec8a16847dee
// gulp.task('js', function() {
//   return browserify(entryPoint, {debug: true, extensions: ['es6']})
//     .transform("babelify", {presets: ["es2015"]})
//     .bundle()
//     .pipe(source('./assets/js/src/bundle.js'))
//     .pipe(buffer())
//     .pipe(sourcemaps.init({loadMaps: true}))
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('./assets/js/build/'))
// });


gulp.task('js', function() {
  return gulp.src(babelFileList)
    .pipe(babel({
            presets: ['es2015']
        }))
    .pipe(addsrc.prepend('./assets/js/src/plugins.js'))
    .pipe(concat('scripts.js'))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(gulp.dest('assets/js/build'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('assets/js/build'));
});

gulp.task('dev', function() {
  gulp.watch('assets/scss/**/*.scss', ['sass']);
  gulp.watch('assets/js/src/*.js', ['js']);
});


