'use strict';

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS     = require('gulp-clean-css'),
    watch        = require('gulp-watch'),
    sourcemaps   = require('gulp-sourcemaps'),
    browserSync  = require('browser-sync').create(),
    mainBowerFiles = require('main-bower-files'),
    flatten = require('gulp-flatten');

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
        .pipe(gulp.dest('./public/css'));
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
   gulp.watch('./frontend/stylesheets/**/*.scss', ['sass']);
   gulp.watch("./public/*.html").on('change', browserSync.reload);
});

gulp.task('font:build', function(){
    return watch(['./frontend/fonts/**/*.woff', './frontend/fonts/**/*.woff2'], function () {
        gulp.src(['./frontend/fonts/**/*.woff', './frontend/fonts/**/*.woff2'])
            .pipe(gulp.dest('./public/fonts'));
    });
});
gulp.task('javascripts:build', function(){
    gulp.src('./js/**/*.js')
            .pipe(gulp.dest('./public/js'));
});
gulp.task('main-css', function() {
    return gulp.src(mainBowerFiles('**/*.css'))
        .pipe(gulp.dest('./public/css'));
});
gulp.task('main-js', function() {
    return gulp.src(mainBowerFiles('**/*.js'))
        .pipe(gulp.dest('./public/js'));
});
gulp.task('default',['browser-sync', 'sass', 'font:build']);
