const { series } = require('gulp');

const gulp = require('gulp');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const stripJs = require('gulp-strip-comments');
const stripCss = require('gulp-strip-css-comments');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create()
const reload = browserSync.reload


function tarefasCSS() {
  return gulp
    .src([
      './node_modules/bootstrap/dist/css/bootstrap.css',
      './vendor/OwlCarousel/dist/assets/owl.carousel.css',
      './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
      './vendor/OwlCarousel/dist/assets/owl.theme.default.css',
      './vendor/jquery-ui/jquery-ui.css',
      './src/css/animate.css/animate.css',
      'src/css/style.css',
    ])
    .pipe(stripCss())
    .pipe(concat('styles.css'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist/css'));
}

function tarefasJS() {
  return gulp
    .src([
      './node_modules/jquery/dist/jquery.js',
      './node_modules/bootstrap/dist/js/bootstrap.js',
      './vendor/OwlCarousel/dist/owl.carousel.js',
      './vendor/jquery-ui/jquery-ui.js',
      './src/js/custom.js',
    ])
    .pipe(stripJs())
    .pipe(concat('bundle.js'))
    .pipe(babel({
      comments: false,
      presets: [
        ['@babel/preset-env', {
          targets: {
            node: 'current',
          },
        }],
      ],
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
      ],
      generatorOpts: {
        compact: false,
        minified: false,
        shouldPrintComment: "comment => /^[@#]__[A-Z]+__$/.test(comment)",
        compactType: 'auto',
      },
    }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(babel()) // Aplicando o Babel novamente após a concatenação
    .pipe(gulp.dest('./dist/js'));
}

function tarefasImagem() {
  return gulp
    .src('./src/imagem/*')
    .pipe(
      imagemin({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10,
        quiet: true,
      })
    )
    .pipe(gulp.dest('./dist/images'));
}

function tarefasHTML() {
  return gulp
    .src('./src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'));
}

async function processImages() {
  await gulp
    .src('./src/imagem/favicon-32x32.png')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));

}

gulp.task('server', function(){

  browserSync.init({
      server: {
          baseDir: "./dist"
      }
  })
  gulp.watch('./src/**/*').on('change', process) // repete o processo quando alterar algo em src
  gulp.watch('./src/**/*').on('change', reload)

})
const process = series( tarefasHTML, tarefasJS, tarefasCSS)

exports.styles = tarefasCSS;
exports.scripts = tarefasJS;
exports.imagem = tarefasImagem;
exports.html = tarefasHTML;
exports.processImages = processImages;
exports.default = process
