var express = require('express');
var todoController = require('./controllers/todocontroller');
var app = express();

//Set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoController(app);

//lsiten to port
app.listen(3000);
console.log('you are listening to port 3000');
