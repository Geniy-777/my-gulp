import gulp from "gulp";


// Конфигурация
import path from "../config/path.js"
import app from "../config/app.js";

// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import size from "gulp-size";
import shorthand from "gulp-shorthand";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import sassGlob from "gulp-sass-glob"
import webpCss from "gulp-webp-css";
import gulpif from "gulp-if";


// Обработка SCSS
export default () => {
    return gulp.src(path.scss.src, { sourcemaps: app.isDev })
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "SCSS",
                message: error.message
            }))
        }))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulpif(app.isProd,webpCss()))
        .pipe(autoprefixer())
        .pipe(gulpif(app.isProd,shorthand()))
        .pipe(gulpif(app.isProd,groupCssMediaQueries()))
        .pipe(size({title:"main.css"}))
        .pipe(gulpif(app.isDev,gulp.dest(path.scss.dest, { sourcemaps: app.isDev })))
        .pipe(gulpif(app.isProd,rename({ suffix: ".min" })))
        .pipe(gulpif(app.isProd,csso()))
        .pipe(gulpif(app.isProd,size({title:"main.min.css"})))
        .pipe(gulpif(app.isProd,gulp.dest(path.scss.dest, { sourcemaps: app.isDev })));
}