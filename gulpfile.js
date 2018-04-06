// REQUIRES

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var eslint = require('gulp-eslint');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var prettyError = require('gulp-prettyerror')
var babel = require('gulp-babel');
// TASKS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
    .pipe(babel({presets: ['es2015']}))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js'}))
    .pipe(gulp.dest('./build/js'));
});
gulp.task('lint', function() {
    return gulp.src('js/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});
gulp.task('watch', function() {
    gulp.watch(['js/*.js', 'sass/*.scss', '*.html'] , ['scripts', 'sass', 'reload']);
});
gulp.task('reload', function() {
    browserSync.reload();
});
gulp.task('sass', function() {
    return gulp
      .src('./sass/style.scss')
      .pipe(prettyError()) // ADD THIS LINE
      .pipe(sass())
      .pipe(
        autoprefixer({
          browsers: ['last 2 versions']
        })
      )
      .pipe(gulp.dest('./build/css'))
      .pipe(cssnano())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./build/css'));
  });
  gulp.task('default', ['browser-sync', 'scripts' , 'sass', 'watch', 'lint']);