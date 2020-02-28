const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let bookSchema = new Schema(
    {
        name: {type:String},
        author: {type:String},
        genre: {type:String}
    }
);

module.exports = mongoose.model("book",bookSchema);