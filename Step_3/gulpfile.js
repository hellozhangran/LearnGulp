var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssgrace  = require('cssgrace'),
    cssnext  = require('cssnext');

gulp.task('css', function () {
  var processors = [
    autoprefixer({browsers: ['last 3 version'],
      cascade: false,
      remove: false
    }),
    cssnext(),
    cssgrace
  ];
  return gulp.src('./client/css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css/'));
});
gulp.task('watch', function(){
  gulp.watch('./client/css/*.css', ['css']);
});
gulp.task('default', ['css']);
