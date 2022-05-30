var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

// 日志处理
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// 纯后端，不需要渲染页面
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
//
// app.set('view engine', 'html');
// app.engine('html', require('express-art-template'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next();
});

// error handler
app.use(function(err, req, res, next) {

  // console.log(err)

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // return error
});

module.exports = app;
