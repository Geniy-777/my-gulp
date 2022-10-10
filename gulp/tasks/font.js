import gulp from "gulp";


// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import newer from "gulp-newer";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";
import gulpif from "gulp-if";


// Обработка Font
export default () => {
    return gulp.src(path.font.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "Font",
                message: error.message
            }))
        }))
        .pipe(gulpif(app.isProd,newer(path.font.dest)))
        .pipe(gulpif(app.isProd,fonter(app.fonter)))
        .pipe(gulpif(app.isProd,gulp.dest(path.font.dest)))
        .pipe(gulpif(app.isProd,ttf2woff2()))
        .pipe(gulp.dest(path.font.dest));
}