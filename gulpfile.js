const [
  gulp,
  less
] = [
  require('gulp'),
  require('gulp-less')
];
gulp.task('style',function(){
  gulp.src('./src/style/style.less')
      .pipe(less())
      .pipe(gulp.dest('./assets'))
  console.log('style success')
})
