var gulp = require('gulp')
,   uglify = require('gulp-uglify')
,   sass = require('gulp-sass')
,   livereload = require('gulp-livereload')
,   notify = require('gulp-notify')
,   watch = require('gulp-watch')
,   rimraf = require('gulp-rimraf')
,   jshint = require('gulp-jshint')
,   nodemon = require('gulp-nodemon')
,   webpack = require('webpack-stream')
,   webpackConfig = require('./webpack.config.js')
,   buffer = require('vinyl-buffer')
,   source = require('vinyl-source-stream');

gulp.task('build', function() {
  gulp.src('src/scripts/main.js')
    .pipe(webpack(webpackConfig))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(livereload());
});

gulp.task('cleanAssets', function() {
  gulp.src('dist/assets/**/*.*')
    .pipe(rimraf());
});

gulp.task('copy', ['cleanAssets'], function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
  gulp.src('src/assets/**/*.*')
    .pipe(gulp.dest('dist/assets'))
    .pipe(livereload());
});

gulp.task('sass', function() {
  gulp.src('src/stylesheets/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
      }).on('error', function (err) {
        console.log(err.name + ' | ' + err.message + ' | ' + 'line number: ' + err.lineNumber + ', column: ' + err.column);
      })
    )
    .pipe(gulp.dest('dist/stylesheets'))
    .pipe(livereload());
});

gulp.task('default', function() {
  livereload.listen();
  nodemon({script: 'server.js', ignore: ['src/*', 'dist/*', 'gulpfile.js', 'node_modules/**']});
  gulp.start('build', 'sass', 'copy');
  gulp.watch('src/scripts/**/*.js', ['build']);
  gulp.watch('src/index.html', ['copy']);
  watch('src/assets/**/*.*', function() {
    gulp.start('copy');
  });
  gulp.watch('src/stylesheets/**/*.scss', ['sass']);
});
