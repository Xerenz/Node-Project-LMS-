const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bookSchema = new Schema(
    {
        author: {type:String,required:true},
        name: {type:String,required:true},
        genre: {type:String,required:true}
    }
);


module.exports = mongoose.model("book",bookSchema);