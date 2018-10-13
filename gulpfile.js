
let gulp = require("gulp");
let shell = require("gulp-shell");
const mocha = require("gulp-mocha");

gulp.task("default", ["test", "docs", "coverage", "reto1", "reto2"]);
gulp.task("test", () =>
        gulp.src("babel-node ./test/tests.js", {read: false})
        .pipe(mocha({reporter: "nyan"}))
);

gulp.task("docs", shell.task("asciidoctor docs/resumen.adoc -o docs/index.html"));
gulp.task("coverage", shell.task("istanbul cover ./node_modules/mocha/bin/_mocha ./test/tests.js && npm run-script coverage && cp -r ./coverage/ ./docs/ && rm -r ./coverage/"));

gulp.task("pre-install", shell.task([
    "sudo gem install asciidoctor"
    ]));

gulp.task("reto1", shell.task("node src/main.js ../inputs/input.json"));

gulp.task("reto2", shell.task("node src/main.js ../inputs/input2.json"));
