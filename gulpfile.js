var gulp          = require('gulp');
var sync          = require('browser-sync').create();
var autoprefixer  = require('gulp-autoprefixer');
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
            baseDir: "./"
        //browser: {
        // "google chrome, firefox, Safari"
      //}
      }
    });
    gulp.watch(["./*.html", "./css/*.css", "./js/*.js"]).on('change', sync.reload);
});
