var gulp           = require('gulp');
var bsync          = require('browser-sync').create();
var autoprefixer   = require('gulp-autoprefixer');
var sass           = require('gulp-sass');
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
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./img/'));
});
// Static server
gulp.task('serve', function() {
    bsync.init({
        server: {
            baseDir: "./",
            //browser: "google chrome, firefox, Safari",
            //notify: false
            injectChanges: true
  }
});
    gulp.watch(["./*.html", "./css/*.css", "./css/*.scss", "./js/*.js"]).on('change', bsync.reload);
});
//concat/min/gzip html/css/js

//compile scss
gulp.task('sass', function () {
  gulp.src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
