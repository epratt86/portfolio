const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {title: 'TA Marsh | Roofing'});
});

app.listen(8000, () => {
  console.log('server is running on 8000');
});
