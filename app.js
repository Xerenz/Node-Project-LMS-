const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');

const server = express();

mongoose.connect("mongodb://localhost/library");

server.set("view engine","ejs");

server.use("/assets/css", express.static(__dirname + "/assets/css"));

server.get('/',(req,res) => {
    res.render('home');
    console.log("Yeah!!");
});

server.listen(8000);