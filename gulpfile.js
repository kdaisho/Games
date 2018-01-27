'use strict';

var gulp = require("gulp"),
	concat = require("gulp-concat"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),
	sass = require("gulp-sass"),
	maps = require("gulp-sourcemaps"),
	del = require("del"),
	uglifycss = require("gulp-uglifycss"),
	livereload = require("gulp-livereload");

// gulp.task("concatScripts", function() {
// 	return gulp.src(["js/main.js",
// 			"js/functions.js",
// 			"js/data.js"
// 		])
// 		.pipe(concat("app.js"))
// 		.pipe(gulp.dest("js"))
// 		.pipe(livereload());
// });

// gulp.task("minifyScripts", ["concatScripts"], function() {
// 	return gulp.src("js/app.js")
// 		.pipe(maps.init())
// 		.pipe(uglify())
// 		// .pipe(rename("app.min.js"))
// 		.pipe(maps.write("./"))
// 		.pipe(gulp.dest("js"));
// });

// gulp.task("compileSass", function() {
// 	return gulp.src("scss/styles.scss")
// 		.pipe(maps.init())
// 		.pipe(sass())
// 		.pipe(maps.write("./"))
// 		.pipe(gulp.dest("css"))
// 		.pipe(livereload());
// });

// gulp.task("minifyCss", ["compileSass"], function() {
// 	return gulp.src("css/styles.css")
// 		.pipe(uglifycss())
// 		.pipe(gulp.dest("css"));
// });

gulp.task("reloadHtml", function() {
	return gulp.src("index.html")
		.pipe(livereload());
});

gulp.task("watchFiles", function() {
	gulp.watch("index.html", ["reloadHtml"]);
	// gulp.watch("scss/**/*.scss", ["compileSass"]);
	// gulp.watch(["js/functions.js", "js/main.js", "js/data.js", "js/app.js"], ["concatScripts"]); // This was concatScripts instead of minifyScripts
	livereload.listen({
		start: true
	});
});

// gulp.task("clean", function() {
// 	del(["dist", "css/styles.css*", "js/app*.js*"]);
// })

// gulp.task("build", ["minifyScripts", "compileSass", "minifyCss"], function() {
// 	return gulp.src(["css/styles.css", "css/styles.css.map", "js/app.js", "index.html",
// 			"images/**"
// 		], { base: "./" })
// 		.pipe(gulp.dest("dist"));
// });

gulp.task("dev", ["watchFiles"]);

// gulp.task("default", ["clean"], function() {
// 	gulp.start("build");
// });