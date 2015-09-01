var gulp        = require('gulp');
var sync        = require('browser-sync').create();

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
    gulp.watch(["./*.html", "./css/*.css"]).on('change', sync.reload);
});

gulp.task('greet', function () {
   console.log('Hello world!');
});
