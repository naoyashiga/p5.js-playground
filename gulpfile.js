
var gulp = require('gulp'), 
    sass = require('gulp-ruby-sass') 
    notify = require("gulp-notify") 
    webserver = require('gulp-webserver');


gulp.task('server', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      port: 8001,
      fallback: 'index.html',
      open: true
    }));
});

// Rerun the task when a file changes
 gulp.task('watch', function() {
     gulp.watch('script.js', ['']); 
});

  gulp.task('default', ['watch','server']);