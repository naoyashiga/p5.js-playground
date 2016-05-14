var gulp = require('gulp'), 
    sass = require('gulp-ruby-sass') 
    notify = require("gulp-notify") 
    webserver = require('gulp-webserver');

gulp.task('server', function() {
  gulp.src('./sketches/generative/zooming')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

// Rerun the task when a file changes
 gulp.task('watch', function() {
     gulp.watch(['sketches/**/*.js','sketches/**/*.html'], ['']); 
});

  gulp.task('default', ['watch','server']);
