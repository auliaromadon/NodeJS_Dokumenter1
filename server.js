const express = require('express');
const app = express();
const port = 6080;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index.ejs');
});

app.listen(port, function() {
    console.log('Server di ${port}');
});