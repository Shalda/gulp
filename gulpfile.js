'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();
gulp.task('sass', function () {
    return gulp.src('./frontend/stylesheets/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(browserSync.stream())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
});


gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
   gulp.watch('./frontend/stylesheets/**/*.scss', ['sass']);
   gulp.watch("./*.html").on('change', browserSync.reload);
});
gulp.task('default',['sass', 'browser-sync']);
