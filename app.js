const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;


app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {title: 'TA Marsh | Roofing'});
});

app.listen(port, () => {
  console.log(`Server is running on: ${port}`);
});
