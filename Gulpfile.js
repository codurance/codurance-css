const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename')
sass.compiler = require('node-sass');

const compileCss = () => {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))    
        .pipe(gulp.dest('./dist/css'));
};

const minifyCss = () => {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'));
};

const updateDocsCSS = () => {
    return gulp.src('./dist/css/codurance.css')            
            .pipe(gulp.dest('./docs/assets/css'));
}

gulp.task('sass', gulp.series(compileCss, updateDocsCSS));
gulp.task('minify', minifyCss)

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', compileCss);
  });
  