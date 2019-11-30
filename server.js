var express = require ("express");

var cors = require ("cors");
var bodyParser = require ("body-parser");
var app = express ();

var mongoose = require ("mongoose");
var port = process.env.PORT || 5000

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))

const mongoURI = 'mongodb+srv://Hacks:david2001@cluster0-arnoh.mongodb.net/test'

mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then ( () => console.log("MongoDB Connected"))
    .catch (err => console.log(err));

var Users = require ("./routes/Users")

app.use("/users", Users)
app.listen(port, function () {
    console.log("SERVER IS RUNNING ON PORT " + port );
    
})