import gulp from "gulp";
import browserSync from "browser-sync";

// Конфигурация
import path from "./gulp/config/path.js";
import app from "./gulp/config/app.js";

// Задачи
import clear from "./gulp/tasks/clear.js";
import pug from "./gulp/tasks/pug.js";
import css from "./gulp/tasks/css.js";
import scss from "./gulp/tasks/scss.js"
import js from "./gulp/tasks/js.js"
import img from "./gulp/tasks/img.js"
import font from "./gulp/tasks/font.js"




// Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
}

// Наблюдатель
const watcher = () => {
    gulp.watch(path.pug.watch, pug).on("all", browserSync.reload);
    gulp.watch(path.scss.watch, scss).on("all", browserSync.reload);
    gulp.watch(path.js.watch, js).on("all", browserSync.reload);
    gulp.watch(path.img.watch, img).on("all", browserSync.reload);
    gulp.watch(path.font.watch, font).on("all", browserSync.reload);
}

const build = gulp.series(
    clear,
    gulp.parallel(pug, scss, js, img, font)
);

const dev = gulp.series(
    build,
    gulp.parallel(watcher, server)
);
export { pug };
export { scss };
export { js };
export { img };
export { font };
export { dev };
export { build };

export default app.isProd ? build : dev;