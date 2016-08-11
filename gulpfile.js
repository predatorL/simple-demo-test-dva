const [gulp,less,cssmin,concat,uglify] = [
  require('gulp'),
  require('gulp-less'),
  require('gulp-cssmin'),
  require('gulp-concat'),
  require('gulp-uglify')
];
// 编译style
gulp.task('style',function(){
  gulp.src('./src/aset/style/style.less')
      .pipe(less())
      .pipe(cssmin())
      .pipe(gulp.dest('./web/style'))
  console.log('style success')
})

// 编译js
gulp.task('vendor', function() {

    return gulp.src('./src/aset/js/*.js')
        .pipe(concat('vendor.js'))    //合并所有js到main.js
        .pipe(gulp.dest('./web/js'))    //输出main.js到文件夹
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('./web/js'));  //输出
        console.log('js success')


});
