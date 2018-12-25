const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

function typescript() {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('dist'));
};

function otherFiles() {
  return gulp.src('./src/**/!(*.ts|*.tsx|*.d.ts|*.js|*.jsx)').pipe(gulp.dest('dist'))
}

exports.default = gulp.series(typescript, otherFiles)


