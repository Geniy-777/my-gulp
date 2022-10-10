
const buildFolder = "./public";
const srcFolder = "./src/";

export default {
    root: buildFolder,
    html:{
        src: srcFolder + "html/*.html",
        watch: srcFolder + "html/**/*.html",
        dest: buildFolder 
    },
    pug: {
        src: srcFolder + "pug/*.pug",
        watch: srcFolder + "pug/**/*.pug",
        dest: buildFolder 
    },
    css: {
        src: srcFolder + "css/*.css",
        watch: srcFolder + "css/**/*.css",
        dest: buildFolder + "/css"
    },
    scss: {
        src: srcFolder + "sass/*.{scss,sass}",
        watch: srcFolder + "sass/**/*.{scss,sass}",
        dest: buildFolder + "/css"
    },
    js: {
        src: srcFolder + "js/*.js",
        watch: srcFolder + "js/**/*.js",
        dest: buildFolder + "/js"
    },
    img: {
        src: srcFolder + "img/*.{png,jpg,jpeg,gif,svg}",
        watch: srcFolder + "img/**/*.{png,jpg,jpeg,gif,svg}",
        dest: buildFolder + "/img"
    },
    font: {
        src: srcFolder + "font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        watch: srcFolder + "font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        dest: buildFolder + "/font"
    }
}