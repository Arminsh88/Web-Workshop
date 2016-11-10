var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var webpack = require('gulp-webpack');


var DIR_NAME = path.resolve(__dirname, '../'); //the second argument is the relative path, the first one is absolute

// gulp.task('hello' , function () {
//     console.log("hello from Gulp!");
// });

// gulp.task('path',function () {
//     console.log(DIR_NAME);
// });

var sassOptions = {
    errLogToConsole : true,
    outputStyle : 'compressed'
};

var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 1%', 'firefox >=4', 'safari >= 4', 'IE >= 6']


};

gulp.task('webpack', function () {

    return watch([DIR_NAME + '/**/*.jsx'], function () {

        gulp.src(DIR_NAME + '/script.jsx')
            .pipe(webpack(require('./webpack.config.js')))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest(DIR_NAME + '/app'));

        console.log("webpack watcher ...");
    });
});

gulp.task('sass', function () {
    return watch(DIR_NAME + '/*.scss' , function () {
        console.log("watching...");

        gulp.src(DIR_NAME + '/style.scss')
            .pipe(sass(sassOptions))
            .pipe(autoprefixer(autoprefixerOptions))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest(DIR_NAME + '/css'))
});
});

gulp.task('default', ['webpack','sass'], function () {
});
