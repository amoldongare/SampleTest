var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var inject = require('gulp-inject');
var mainBowerFiles = require('main-bower-files');
var debug = require('gulp-debug');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('serve:before', ['watch', 'sass', 'index']);

var paths = {
  sass: ['./scss/**/*.scss'],
  bower: ['./www/lib/**/*.json']
};

gulp.task('default', ['index', 'sass']);

gulp.task('index', function () {
  return gulp.src('./www/index.html')
    .pipe(inject(gulp.src(mainBowerFiles(), { read: false }), { name: 'bower', relative: true }))
    .pipe(gulp.dest('./www'));
});

//TODO JF removed minify because it was chocking after adding sourcemaps.  we might want to add it back at some point and make sure it only gets minified when building for prod:
    // .pipe(minifyCss({
    //   keepSpecialComments: 0
    // }))

gulp.task('sass', function (done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./www/css/'))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function () {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function () {
  return bower.commands.install()
    .on('log', function (data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function (done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
