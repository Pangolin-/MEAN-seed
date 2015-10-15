var gulp = require('gulp');
var gutil = require('gulp-util');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var watch = require('gulp-watch');
var inject = require('gulp-inject');
var minifyHTML = require('gulp-minify-html');
var browserSync = require('browser-sync');
var templateCache = require('gulp-angular-templatecache');
var $ = require('gulp-load-plugins')();

var paths = {
  sass: ['dev/scss/*.scss'],
  js: ['dev/js/**/*.js'],
  html: ['dev/views/*.html'],
  app: ['dev/js/app.js'],
  main: ['dev/index.html'],
  assets: ['dev/assets/**/*'],
  libs: ['dev/libs/**/*']
};

gulp.task('default', ['sass', 'assets', 'js', 'views', 'index', 'move-lib']);

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
  gulp.watch(paths.assets, ['assets'])
  gulp.watch(paths.libs, ['move-lib'])
});

gulp.task('views', function() {
  return gulp.src('./dev/views/*.html')
    .pipe(gulp.dest('./www/views/'))
});

gulp.task('index', function() {
  return gulp.src('./dev/index.html')
    .pipe(gulp.dest('./www/'))
});

gulp.task('move-lib', function() {
  return gulp.src('dev/libs/**/*.*')
    .pipe(gulp.dest('./www/libs/'))
});

gulp.task('sass', function(done) {
  gulp.src('./dev/scss/style.scss')
    .pipe($.sass())
    .pipe($.csso())
    .pipe($.concat('style.css'))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('assets', function() {
  return gulp.src('./dev/assets/**/*.*')
    .pipe(gulp.dest('./www/assets'))
})

gulp.task('js', function() {
  return gulp.src('./dev/js/**/*.*')
    .pipe(gulp.dest('./www/js'));
});
