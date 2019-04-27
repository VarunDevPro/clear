var gulp        = require('gulp'),
postcss         = require('gulp-postcss'),  // require gulp-postcss not postcss
cssImport       = require('postcss-import');
mixins          = require('postcss-mixins'),
cssvars         = require('postcss-simple-vars'),
nested          = require('postcss-nested'),
autoprefixer    = require('autoprefixer'),
hexrgba			    = require('postcss-hexrgba');
// var browserSync = require('browser-sync');

gulp.task('styles', function () {
	 return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([ cssImport, mixins, cssvars, nested, hexrgba, autoprefixer ]))
        .on('error', function (errorInfo) {
          console.log(errorInfo.toString());
          this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});
