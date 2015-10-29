var gulp = require('gulp'),
    compass = require('gulp-compass');
    inject = require('gulp-inject');

gulp.task('default', function() {
    console.log('Gulp running');
});

gulp.task('watch', ['index'], function() {
    gulp.watch('./app/**/*.js', ['index']);
});

gulp.task('index', function() {
    var target = gulp.src('index.html');
    var sources = gulp.src(
        [
            './app/**/*.js',
            './assets/css/stylesheets/*.css'
        ],
        {
            read: false
        }
    );

    return target
        .pipe(inject(sources))
        .pipe(gulp.dest(''));
});