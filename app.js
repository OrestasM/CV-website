var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();


//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Set Static Path
app.use(express.static(path.join(__dirname,'public')));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/jquery', express.static(__dirname + "/node_modules/jquery/dist/"))

app.get('/',function(req,res){
    res.render('language');
});

app.get('/en',function(req,res){
    res.render('index_en');
});

app.get('/lt',function(req,res){
    res.render('index');
});



app.listen(3000, function(){
    console.log("Server started on port 3000...");
});