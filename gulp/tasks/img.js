import gulp from "gulp";


// Конфигурация
import path from "../config/path.js";
import app from "../config/app.js";

// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import webp from "gulp-webp";
import gulpif from "gulp-if";



// Обработка Image
export default () => {
    return gulp.src(path.img.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "Image",
                message: error.message
            }))
        }))
        .pipe(gulpif(app.isProd,newer(path.img.dest)))
        .pipe(gulpif(app.isProd, webp()))
        .pipe(gulpif(app.isProd, gulp.dest(path.img.dest)))
        .pipe(gulpif(app.isProd, gulp.src(path.img.src)))
        .pipe(gulpif(app.isProd, newer(path.img.dest)))
        .pipe(gulpif(app.isProd, imagemin(app.imagemin)))
        .pipe(gulp.dest(path.img.dest))
}