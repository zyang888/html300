var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');
var connect = require('gulp-connect');

gulp.task('copy', done => {
  gulp.src('index.html').pipe(gulp.dest('assets'))
  done()
});

gulp.task('log', done => {
  gutil.log('== My Log Task ==')
  done()
});

gulp.task('sass', done => {
  gulp.src('styles/main.scss').pipe(sass({style: 'expanded'})).on('error', gutil.log).pipe(gulp.dest('assets'))
  done()
});

gulp.task('connect', done => {
  connect.server({root: '.', livereload: true})
  done();
});

gulp.task('watch', done => {
  gulp.watch('styles/main.scss', gulp.series('sass'));
  done();
});

gulp.task('default', gulp.series('copy', 'sass', 'connect', 'watch'));
