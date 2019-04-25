const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename')
sass.compiler = require('node-sass');

const compileCss = () => {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))    
        .pipe(gulp.dest('./dist/css'));
};


gulp.task('sass', gulp.series(compileCss, updateDocsCSS));
gulp.task('minify', minifyCss)


gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', compileCss);
  });
  