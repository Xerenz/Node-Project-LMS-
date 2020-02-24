const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');

const server = express();

mongoose.connect("mongodb://localhost/library");

server.set('view enginer','ejs');

server.use("/assets/css", express.static(__dirname + "/assets/css"));

server.get('/',(req,res) => {
    res.render('home');
});

server.listen(8000);