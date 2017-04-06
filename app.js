var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI');
var Book = require('./models/bookModel');

//Server stuffs
var app = express();
var port = process.env.PORT || 3000;

//Middlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Routes and Models

bookRouter = require('./Routes/bookRoutes')(Book);
app.use('/api/books/', bookRouter);

app.get("/", function(req, res) {
    res.send("Welcome to my API!");
});

app.listen(port, function() {
    console.log("Running on PORT: " + port)
});