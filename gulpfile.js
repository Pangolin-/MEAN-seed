var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var watch = require('gulp-watch');
var inject = require('gulp-inject');
var minifyHTML = require('gulp-minify-html');
var mainBowerFiles = require("main-bower-files");
var browserSync = require('browser-sync');
var templateCache = require('gulp-angular-templatecache');
var $ = require("gulp-load-plugins")();

var paths = {
  sass: ['./public/scss/*.scss'],
  js: ['public/js/*.js'],
  html: ['public/views/*.html'],
  app: ['public/js/app.js'],
  main: ['public/index.html']
};

gulp.task('default', ['sass', 'img', 'js', 'views', 'index', 'move-lib', 'move-bower', 'css']);

gulp.task('watch', ['default'], function () {
  browserSync({
    notify: false,
    server: {
      baseDir: ['www']
    },
    port: "8080"
  });

  gulp.watch(paths.sass, ['sass'])
  gulp.watch(paths.js, ['js'])
  gulp.watch(paths.html, ['views'])
  gulp.watch(paths.main, ['index'])
});

gulp.task('views', function() {
  return gulp.src('./public/views/*.html')
    .pipe(gulp.dest('./www/views/'))
});

gulp.task('index', function() {
  return gulp.src('./public/index.html')
    .pipe(gulp.dest('./www/'))
});

gulp.task('move-lib', function() {
  return gulp.src('public/libs/**/*.*')
    .pipe(gulp.dest('./www/libs/'))
});

gulp.task('css', function() {
  return gulp.src('public/css/**.*')
    .pipe(gulp.dest('www/css/'))
})

gulp.task('sass', function(done) {
  gulp.src('./public/scss/main.scss')
    .pipe($.sass())
    .pipe($.csso())
    .pipe($.concat('style.css'))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('move-bower', function() {
  return gulp.src('./public/bower_components/**/**.*')
    .pipe(gulp.dest('./www/bower_components/'))
})

gulp.task('img', function() {
  return gulp.src('./public/img/**/**.*')
    .pipe(gulp.dest('./www/img'))
})

gulp.task('js', function() {
  return gulp.src('./public/js/**/*.*')
    .pipe(gulp.dest('./www/js'));
});