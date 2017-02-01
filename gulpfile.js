var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    del = require('del'),
    buffer = require('gulp-buffer'),
    source = require('vinyl-source-stream'),
    rename = require('gulp-rename'),
    browserify = require('browserify');

gulp.task('default', ['bundle','bundleArray','bundleObject','bundleNumber','bundleString','bundleCore','bundleRest']);

gulp.task('bundle', [], function(cb){
  var filename = 'rearmed.min.js';
  del(filename);
  pump([
    browserify('./src/rearmed.js', {
      debug: true,
    }).bundle(),
    source(filename),
    buffer(),
    uglify({
      preserveComments: 'license'
    }), 
    gulp.dest('./dist/')
  ], cb);
});

gulp.task('bundleArray', [], function(cb){
  var filename = 'rearmed/array.min.js';
  del(filename);
  pump([
    browserify('./src/rearmed/array.js', {
      debug: true
    }).bundle(),
    source(filename),
    buffer(),
    uglify({
      preserveComments: 'license'
    }), 
    gulp.dest('./dist/')
  ], cb);
});

gulp.task('bundleObject', [], function(cb){
  var filename = 'rearmed/object.min.js';
  del(filename);
  pump([
    browserify('./src/rearmed/object.js', {
      debug: true
    }).bundle(),
    source(filename),
    buffer(),
    uglify({
      preserveComments: 'license'
    }), 
    gulp.dest('./dist/')
  ], cb);
});

gulp.task('bundleNumber', [], function(cb){
  var filename = 'rearmed/number.min.js';
  del(filename);
  pump([
    browserify('./src/rearmed/number.js', {
      debug: true
    }).bundle(),
    source(filename),
    buffer(),
    uglify({
      preserveComments: 'license'
    }), 
    gulp.dest('./dist/')
  ], cb);
});

gulp.task('bundleString', [], function(cb){
  var filename = 'rearmed/string.min.js';
  del(filename);
  pump([
    browserify('./src/rearmed/string.js', {
      debug: true
    }).bundle(),
    source(filename),
    buffer(),
    uglify({
      preserveComments: 'license'
    }), 
    gulp.dest('./dist/')
  ], cb);
});

gulp.task('bundleCore', [], function(cb){
  var filename = 'rearmed/core.min.js';
  del(filename);
  pump([
    browserify('./src/rearmed/core.js', {
      debug: true
    }).bundle(),
    source(filename),
    buffer(),
    uglify({
      preserveComments: 'license'
    }), 
    gulp.dest('./dist/')
  ], cb);
});

gulp.task('bundleRest', [], function(cb){
  pump([
    gulp.src('./src/rearmed/*/*.js'), 
    uglify({
      preserveComments: 'license'
    }), 
    rename({
      suffix: '.min'
    }),
    gulp.dest('./dist/')
  ], cb);
});

gulp.task('watch', function() {
  gulp.watch(paths.src, ['default']);
});
