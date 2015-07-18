var gulp = require('gulp')
,   sass = require('gulp-sass')
,   livereload = require('gulp-livereload')
,   watch = require('gulp-watch')
,   rimraf = require('gulp-rimraf')
,   browserify = require('browserify')
,   reactify = require('reactify')
,   source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  browserify('src/scripts/main.js')
    .transform('reactify')
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('cleanAssets', function() {
  gulp.src('dist/assets/**/*.*')
    .pipe(rimraf());
});

gulp.task('copy', ['cleanAssets'], function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('src/assets/**/*.*')
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('sass', function() {
  gulp.src('src/stylesheets/main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/stylesheets'));
});

gulp.task('default', ['browserify', 'sass', 'copy'], function() {
  livereload.listen();
  gulp.watch('src/scripts/**/*.js', ['browserify']);
  gulp.watch('src/index.html', ['copy']);
  watch('src/assets/**/*.*', function() {
    gulp.start('copy');
  });
  gulp.watch('src/stylesheets/main.scss', ['sass']);
});