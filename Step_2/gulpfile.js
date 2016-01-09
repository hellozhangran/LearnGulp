var gulp=require('gulp'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    htmlmin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    less = require('gulp-less');



gulp.task('min',function(){
    gulp.src('./client/*.js')
    .pipe(uglify())
    .pipe(rename({suffix:'-min'}))//upmjs.org
    .pipe(gulp.dest('./dist/'));
});

gulp.task('cssnano',function(){
    gulp.src('./client/*.css')
    .pipe(cssnano())
    .pipe(rename({suffix:'-min'}))//upmjs.org
    .pipe(gulp.dest('./dist/'));
});

gulp.task('htmlmin',function(){
    gulp.src('./client/*.html')
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(rename({suffix:'-min'}))//upmjs.org
    .pipe(gulp.dest('./dist/'));
});

gulp.task('jshint',function(){
    gulp.src('./client/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter());
});

gulp.task('concat',function(){
    gulp.src('./client/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('imagemin',function(){
    gulp.src('./client/images/*')
    .pipe(imagemin({
        progressive:true,
        use:[pngquant()]
    }))
    .pipe(gulp.dest('./dist/images/'));
});

gulp.task('less',function(){
    gulp.src('./client/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/'));
});
