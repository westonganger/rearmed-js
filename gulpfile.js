var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    del = require('del'),
    buffer = require('gulp-buffer'),
    source = require('vinyl-source-stream'),
    rename = require('gulp-rename'),
    browserify = require('browserify');

var tasks = ['rearmed','array','object','number','string','core'];

tasks.forEach(function(item, i){
  gulp.task(item, [], function(cb){
    var filename = '';
    if(item !== 'rearmed'){
      filename += 'rearmed/';
    }
    filename += item + '.js';

    del(filename);
    del(filename.replace('.js','.min.js'));

    pump([
      browserify(('./src/'+filename), {
        debug: true,
      }).bundle(),

      source(filename.replace('rearmed/','')),

      buffer(),

      gulp.dest('./'),

      uglify({
        preserveComments: 'license'
      }), 

      rename({
        suffix: '.min'
      }),

      gulp.dest('./dist/')
    ], cb);
  });
});

gulp.task('other', [], function(cb){
  pump([
    gulp.src('./src/rearmed/*/*.js'), 

    gulp.dest('./'),

    uglify({
      preserveComments: 'license'
    }), 

    rename(function(path){
      path.dirname = path.dirname.replace('rearmed/','')
      path.extname = '.min.js'
    }),

    gulp.dest('./dist/')
  ], cb);
});

gulp.task('default', tasks.concat(['other']));

gulp.task('watch', function() {
  gulp.watch(paths.src, ['default']);
});
