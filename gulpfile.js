var gulp          = require('gulp');
var sync          = require('browser-sync').create();
var autoprefixer  = require('gulp-autoprefixer');
var sass          = require('gulp-sass');
// build task
//todo
//do something to imgs on build
//open more browsers on serve
gulp.task('build', function () {
    return gulp.src('css/styles.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css/'));
});
// Static server
gulp.task('serve', function() {
    sync.init({
        server: {
            baseDir: "./",
            browser: "google chrome, firefox, Safari",
            notify: false,
  }
});
    gulp.watch(["./*.html", "./css/*.css", "./css/*.scss", "./js/*.js"]).on('change', sync.reload);
});
//concat/min/gzip html/css/js

//compile scss
gulp.task('sass', function () {
  gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
