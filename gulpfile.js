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
      .pipe(gulp.dest('./web'))
  console.log('style success')
})
