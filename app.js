const dotenv = require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const exphbs = require('express-handlebars');
const expressSanitizer = require('express-sanitizer');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const http = require('http');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportLocalMongoose = require('passport-local-mongoose');
const path = require('path');
const app = express();
const { User } = require('./server/models/user');
const { Form } = require('./server/models/form');
const { mongoose } = require('./server/db/mongoose');
const indexRoute = require('./server/routes/index');
const port = process.env.PORT || 8000;



app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_PARSER));
//expressSanitizer
app.use(expressSanitizer());
//express session middleware
app.use(session({
  secret: process.env.SECRETSESSION,
  resave: false,
  saveUninitialized: false
}));

//passport config
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash());

//lets us know who is logged in. keep above routes
app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use(indexRoute);

app.listen(port, () => {
  console.log(`Server is running on: ${port}`);
});
