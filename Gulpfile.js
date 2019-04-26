const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename')
const minify = require('gulp-minify');
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

const minifyJs = () => {
    return gulp.src('./js/**/*.js')
            .pipe(minify())
            .pipe(gulp.dest('./dist/js'));
}

const updateDocsCSS = () => {
    return gulp.src('./dist/css/codurance.css')            
            .pipe(gulp.dest('./docs/assets/css'));
};

const updateDocsJS = () => {
    return gulp.src('./dit/js/*.js')
            .pipe(gulp.dest('./docs/assets/js'))
}

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', compileCss);
});
  
gulp.task('minify', gulp.parallel(compileCss, minifyCss, minifyJs));
gulp.task('build', gulp.series('minify', updateDocsCSS, updateDocsJS));