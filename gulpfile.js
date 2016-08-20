var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    rename = require('gulp-rename'),
    del = require('del');

require('gulp-release-it')(gulp);

var paths = {
  src: './src/*.js',
  dist: './dist/'
};

gulp.task('default', ['minify']);

gulp.task('clean',function(cb){
  return del(paths.dist+"*" , cb);
});

gulp.task('minify', ['clean'], function(cb){
  pump([
    gulp.src(paths.src), 
    uglify({
      preserveComments: 'license'
    }), 
    rename({
      suffix: '.min'
    }),
    gulp.dest(paths.dist)
  ], cb);
});

gulp.task('watch', function() {
  gulp.watch(paths.src, ['minify']);
});
