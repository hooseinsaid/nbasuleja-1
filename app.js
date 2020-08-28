/* eslint-disable no-undef */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const newsRouter = require ('./routes/News')
const membersRouter = require ('./routes/Members')
const eventsRouter = require ('./routes/Events')
const dashboardRouter = require ('./routes/dashboard')
const aboutRouter = require ('./routes/about')
const searchRouter = require ('./routes/search')
const contactRouter = require ('./routes/contact')
const allmembersRouter = require('./routes/membersPageroute')
const geteventRouter = require('./routes/getevent')
const getnewsRouter = require('./routes/getnews')
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
// const getprofileRouter = require('./routes/profile')
const database = require('./models/database')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');

app.use(bodyparser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/publish-news', newsRouter)
app.use('/publish-events', eventsRouter)
app.use('/add-members', membersRouter)
app.use('/dashboard', dashboardRouter)
app.use('/about', aboutRouter)
app.use('/find-a-lawyer', searchRouter)
app.use('/contact-us', contactRouter)
app.use('/members', allmembersRouter)
app.use('getevent/:id', geteventRouter)
app.use('getnews/:id', getnewsRouter)
const router = express.Router();

 const Members = require ('./models/members')

app.get('/getprofile/:id',async (req, res)=>{
    const id = new ObjectId(req.params.id);
const member = await Members.findById({_id: id});
console.log(member);
    res.render('profile', {member: member})
})

// app.use('/getprofile/:id', getprofileRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
