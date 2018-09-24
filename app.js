const dotenv = require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const exphbs = require('express-handlebars');
const expressSanitizer = require('express-sanitizer');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
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


//lets us know who is logged in. keep above routes
app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});

app.use(indexRoute);

app.listen(port, () => {
  console.log(`Server is running on: ${port}`);
});
