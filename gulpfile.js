let gulp = require('gulp')
let sass = require('gulp-sass')
let browserSync = require('browser-sync')

// сервер
gulp.task('browser-sync', function() {    // Создаем таск browser-sync
    browserSync({                         // Выполняем browserSync
        server: {                         // Определяем параметры сервера
            baseDir: './maket/footer',      // Директория для сервера - app
        },
        notify: false,
        port: 4000,
        open: true,
        notify: false                     // Отключаем уведомления
    });
});

// обновление и компиляция sass -> css
gulp.task('sass', function(){                                               // Создаем таск Sass
    return gulp.src('./maket/sass/**/*.sass')                               // Берем источник
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))   // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('./maket/footer'))                                     // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true}))                           // Обновляем CSS на странице при изменении
});

// обновление js
gulp.task('scripts', function() {
    return gulp.src('./maket/**/*.js')
    .pipe(browserSync.reload({ stream: true }))
});

// обновление html
gulp.task('code', function() {
    return gulp.src('./maket/**/*.html')
    .pipe(browserSync.reload({ stream: true }))
});

// слежение за изменениями в файлах
gulp.task('watch', function() {
    gulp.watch('./maket/sass/**/*.sass', gulp.parallel('sass'));    // Наблюдение за sass файлами
    gulp.watch('./maket/**/*.html', gulp.parallel('code'));         // Наблюдение за HTML файлами в корне проекта
    gulp.watch('./maket/**/*.js', gulp.parallel('scripts'));        // Наблюдение за главным JS файлом и за библиотеками
});

// сборочный таск
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));