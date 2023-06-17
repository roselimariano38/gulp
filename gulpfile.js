const gulp = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const image = import('gulp-imagemin').then((module) => module.default);
const stripJs = require('gulp-strip-comments')
const stripCss = require('gulp-strip-css-comments');






function tarefasCSS(cb) {
 
    return gulp.src([
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './vendor/OwlCarousel/dist/assets/owl.carousel.css',
           './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
           './vendor/OwlCarousel/dist/assets/owl.theme.default.css',
           './vendor/jquery-ui/jquery-ui.css',
           './src/css/animate.css/animate.css',
            'src/css/style.css',


        ])
        .pipe(stripCss())                   // remove comentários
        .pipe(concat('styles.css'))         // mescla arquivos
        .pipe(cssmin())                     // minifica css
        .pipe(rename({ suffix: '.min'}))    // styles.min.css
        .pipe(gulp.dest('./dist/css'))      // cria arquivo em novo diretório

}


function tarefasJS(){

    return gulp.src([
            './node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './vendor/OwlCarousel/dist/owl.carousel.js',
            './vendor/jQuery-Mask/jquery.mask.js',
            './vendor/jquery-ui/jquery-ui.js',
            './src/js/custom.js'
        ])
        .pipe(stripJs())                    // remove comentários
        .pipe(concat('scripts.js'))         // mescla arquivos
        .pipe(uglify())                     // minifica js
        .pipe(rename({ suffix: '.min'}))    // scripts.min.js
        .pipe(gulp.dest('./dist/js'))       // cria arquivo em novo diretório

} 
async function tarefasImagem() {
    const imagemin = await image;
    return gulp
      .src('./src/imagem/*')
      .pipe(imagemin({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
        quiet: true
      }))
      .pipe(gulp.dest('./dist/images'));
  }
  
  

exports.styles = tarefasCSS;
exports.scripts = tarefasJS;
exports.imagem = tarefasImagem;

  