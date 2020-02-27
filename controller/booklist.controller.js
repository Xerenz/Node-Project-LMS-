const User = require("../models/users.model");
const Book = require("../models/books.model");

exports.view_book = (req,res) => {
    Book.find({} ,(err,book) => {
        if(err)
        {
            console.log(err);
            return res.render('/home');
        }
        console.log(book);
        res.render('view_book', {book:book});
    });
};

