/**
 * Created by nicolasmondon on 02/02/15.
 */

// include gulp
var gulp = require('gulp');

// include plugins
var concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');


// vendors
gulp.task('build-vendors', function () {

    var dependencies = [
        // object observe
        'node_modules/object.observe/dist/object-observe.js',
        // d3
        'node_modules/d3/d3.js',
        // topojson
        'node_modules/topojson/topojson.js',
        // jquery
        'node_modules/jquery/dist/jquery.js',
        // lodash
        'node_modules/lodash/index.js',
        // bluebird
        'node_modules/bluebird/js/browser/bluebird.js'
    ];

    gulp.src(dependencies)
        .pipe(concat('vendors.chunk.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

// default task
gulp.task('default', ['build-vendors']);