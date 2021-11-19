let { src, dest, watch } = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    cssnano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass')(require('sass')),
    babel = require('gulp-babel');



function copy() {
    return src('./src/index.html').pipe(dest('./dist'));
}

function HTML() {
    return src('./src/html/*.html')
        .pipe(htmlmin())
        .pipe(dest('./dist/html'));
}


function CSS() {
    return src('./src/sass/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./dist/css'));
}


function JS() {
    return src('./src/js/*.js')
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./dist/js'));
}

function IMG() {
    return src('./src/img/*')
        .pipe(imagemin())
        .pipe(dest('./dist/img'));
}


exports.html = HTML;
exports.js = JS;
exports.css = CSS;
exports.img = IMG;
exports.copy = copy;