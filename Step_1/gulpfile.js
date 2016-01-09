var gulp = require('gulp');
gulp.task('read',function(){
    gulp.src('./client/*.js')
    .pipe(gulp.dest('./dist/'));
});

//gulp.src gulp.dest gulp.watch gulp.task

gulp.task('watch',function(){
    var watcher = gulp.watch('./client/*.js',['read']);
    watcher.on('change',function(){
        console.log('on change');
    });
});
