var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');
var connect = require('gulp-connect');
var runSequence = require('run-sequence');
var rename = require('gulp-rename');
var merge = require('merge-stream');
var nano = require('gulp-cssnano');
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');
var header = require('gulp-header');
var exec = require('child_process').exec;
var ghPages = require('gulp-gh-pages');

var pkg = require('./package.json');
var styleguide = require('./index.js');

var srcDocs = path.join(__dirname, 'docs');
var destDocs = path.join(srcDocs, '_site');
var releaseOutput = path.join(__dirname, '.release');
var cssRelease = path.join(releaseOutput, 'css');

var banner = [
    '/*!',
    ' * FED Guide v<%= pkg.version %>',
    ' * Copyright <%= new Date().getFullYear() %>',
    ' */',
    ''].join('\n');

// 构造jekyll
gulp.task('docs-jekyll', function (cb) {
    fs.writeFileSync(path.join(srcDocs, '_data/package.json'), JSON.stringify(pkg));

    exec('jekyll build', {
        cwd: srcDocs
    }, function(err) {
        if (err) return cb(err);
        cb();
    });
});

// 构造文档css
gulp.task('docs-styles', function() {
    return gulp.src('./docs/less/main.less')
    .pipe(less(styleguide.less))
    .pipe(postcss([autoprefixer]))
    .pipe(nano())
    .pipe(rename('docs.css'))
    .pipe(header(banner, {pkg:pkg} ))
    .pipe(gulp.dest(destDocs));
});

// 清除发布目录
gulp.task('docs-clean', function(cb) {
    del([
        path.join(destDocs, '**')
    ], cb);
});

// 启动本地服务器
gulp.task('docs-server', function() {
    connect.server({
        port: 1024,
        root: destDocs
    });
});

// 复制静态资源
gulp.task('docs-assets', function() {
    return gulp.src([
        'assets/**/*.*'
    ], {
        base: 'assets'
    })
    .pipe(gulp.dest(path.join(destDocs, 'assets')));
});

// 构造文档文件
gulp.task('docs-build', function(cb) {
    runSequence('docs-jekyll', 'docs-styles', 'docs-assets', cb);
});

// 发布文档文件
gulp.task('docs-deploy', ['docs-build'], function() {
    return gulp.src('./docs/_site/**/*')
    .pipe(ghPages());
});

// 在本地服务器中测试文档
gulp.task('docs-test', function(cb) {
    gulp.watch([
        'less/**/*.less',
        'docs/less/**/*.less'
    ], ['docs-styles']);
    var watcher = gulp.watch([
        'docs/*.md',
        'docs/_layouts/*.html',
        'docs/_includes/*.html',
        'docs/_includes/*.md'
    ], ['docs-build']);

    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

    runSequence('docs-build', 'docs-server', cb);
});


// 清除发布目录
gulp.task('release-clean', function(cb) {
    del([
        path.join(releaseOutput, '**')
    ], cb);
});

// 构造发布css文件
gulp.task('release-css', function() {
    var s = function() {
        return gulp.src('./less/main.less')
                .pipe(less(styleguide.less))
                .pipe(postcss([autoprefixer]));
    };

    return merge(
        s().pipe(rename('fedguide.css'))
           .pipe(gulp.dest(cssRelease)),
        s().pipe(nano())
           .pipe(rename('fedguide.min.css'))
           .pipe(header(banner, {pkg:pkg} ))
           .pipe(gulp.dest(cssRelease))
    );
});

// 创建一个发布文件夹
gulp.task('release-folder', ['release-clean'], function() {
    return gulp.src([
        '**/*.*',
        '!docs/**/*',
        '!node_modules/**/*',
        '!gulpfile.js',
        '!package.json'
    ])
    .pipe(gulp.dest(releaseOutput));
});

// 写一个发布 package.json
gulp.task('release-packagejson', function(cb) {
    var _pkg = _.omit(pkg,
        'devDependencies',
        'dependencies',
        'scripts',
        'private'
    );

    fs.writeFile(path.resolve(releaseOutput, 'package.json'), JSON.stringify(_pkg, null, 4), cb);
});

// 构造发布
gulp.task('release-build', function(cb) {
    runSequence('release-folder', ['release-css', 'release-packagejson'], cb);
});

// 发布一个新版本
gulp.task('release', ['release-build', 'docs-deploy']);

// 执行默认任务
gulp.task('default', ['docs-test']);
