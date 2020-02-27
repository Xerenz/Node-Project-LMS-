const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const passport = require('passport');
const localStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');
const bodyParser = require("body-parser");


//Creating server
const server = express();

//Connecting to the database
mongoose.connect("mongodb://localhost/library");

//Using resources
server.use("/assets/css", express.static(__dirname + "/assets/css"));
server.use("/assets/img", express.static(__dirname + "/assets/img"));
server.use(bodyParser.urlencoded({extended : false}));
server.use(bodyParser.json());
server.use(passport.initialize());
server.use(passport.session())

//Using model
const User = require("./models/users.model");
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Setting view engine
server.set("view engine","ejs");


//To display static web pages
server.get('/home',(req,res) => {
    res.render("home");
    console.log("Veetil ethiyee...!");
})

//Resgister
server.get("/register",(req,res) => {
    res.render("register");
});

server.post("/register",(req,res) => {
    User.register(new User({

        username: req.body.username
    
    }), req.body.password, (err,user) => {
        if(err) {
            console.log(err);
            return res.redirect('/register');
        }
        console.log("User created "+user.username);
        passport.authenticate('local')(req,res,() => {
            if(req.user) {
                console.log("User Authenticated");
                res.redirect('/home');
            }
        });
    });
});

//Login
server.get('/login', (req,res) => {
    res.render('login');
});

server.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/home'
}));

server.listen(3000);