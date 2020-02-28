const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let withdrawn_bookSchema = new Schema(
    {
        name: {type:String},
        author: {type:String},
        genre: {type:String},
        username: {type:String}
    }
);

module.exports = mongoose.model("withdrawn",withdrawn_bookSchema);