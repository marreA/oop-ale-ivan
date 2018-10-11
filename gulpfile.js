
let gulp = require('gulp');
let shell = require('gulp-shell');
const mocha = require('gulp-mocha');

gulp.task("default", ["test"]);
gulp.task("test", () =>
        gulp.src('babel-node ./test/tests.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}))
);

gulp.task('docs', shell.task("asciidoctor docs/resumen.adoc -o docs/index.html"));

gulp.task("pre-install", shell.task([
    "sudo gem install asciidoctor"
    ]));
